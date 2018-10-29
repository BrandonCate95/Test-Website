import React from 'react'
import PropTypes from 'prop-types'
import SignUpLinkWithRouter from '../../../../components/links/SignUpLinkWithRouter'
import Login from './components/LoginBtn'
import { connect } from 'react-redux'
import { userLogin } from '../../../../actions/actions'
import styled from 'styled-components'
import ForgotPasswordLink from './components/ForgotPasswordLink'
import AuthPageTemplate from '../../template/AuthPageTemplate'

import TextField from '../../../../components/mdc/TextField'
import Input from '../../../../components/mdc/Input'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class SignInPage extends React.Component {

    state = {
      username: '',
      password: '',
      loading: false,
    }

    handleInputChange(event) {
      const target = event.target
      const value = target.value
      const name = target.name
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit = async (event) => {
      event.preventDefault()
      this.setState({loading: true})
      this.props.userLogin({
        username: this.state.username,
        password: this.state.password,
      })
    }

    render(){
      return(
        <AuthPageTemplate 
          handleSubmit={this.handleSubmit.bind(this)}
        >         

            <TextField
                box
                label='Username or Email'
            >
                <Input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange.bind(this)}/>
            </TextField> 

            <TextField
                box
                label='Password'
            >
                <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange.bind(this)}
                    required minLength="8"
                />
            </TextField> 

            <Login
                raised
                to={ {state: this.props.location.state} }
                redirectToReferrer={ this.props.authenticated }
                loading={this.state.loading}
            />

            <StyledDiv>
              <ForgotPasswordLink />
              <span className="mdc-typography--body2 mdc-theme-neutral--color">or</span>
              <SignUpLinkWithRouter />
            </StyledDiv>
        </AuthPageTemplate>
      )
    }
  }

SignInPage.defaultProps = {
  location: {
    state: {
      from: "/",
      fromSearch: "",
    }
  }
}

SignInPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
      authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (payload) => {
      dispatch(userLogin(payload))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPage)