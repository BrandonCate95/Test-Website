import React from 'react'
import PropTypes from 'prop-types'
import SignInLinkWithRouter from '../../../../components/links/SignInLinkWithRouter'
import SignUpBtn from './components/SignUpBtn'
import { connect } from 'react-redux'
import { userLoginSuccess } from '../../../../actions/actions'
import { Auth } from 'aws-amplify'
import { graphql } from 'react-apollo'
import CREATE_USER from '../../../../mutations/mutation/CREATE_USER'
import TextField, {Input} from '@material/react-text-field'
import styled from 'styled-components'
import AuthPageTemplate from '../../template/AuthPageTemplate'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class SignUpPage extends React.Component {

    state = {
      username: '',
      email: '',
      password: '',
      redirect: false,
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
      Auth.signUp({
          username: this.state.username,
          password: this.state.password,
          attributes: {
              email: this.state.email,         
          },
      })
      .then(async () => { 
          const user = await Auth.signIn(this.state.username, this.state.password)     
          return user
      })
      .then(async (user) => {
          const emailVerified = user.signInUserSession.idToken.payload.email_verified
          const username = user.username
          this.props.userLoginSuccess({ username, emailVerified })

          const data = await Auth.currentUserPoolUser()

          return this.props.mutate({ variables: {
            username: data.username,
            sub: data.signInUserSession.idToken.payload.sub,
          } }).then( res => res )
      })
      .then(() => {
        Auth.verifyCurrentUserAttribute('email')
        this.setState({ redirect: true, loading: false })
      })
      .catch(error => { console.log(error); this.setState({loading: false}) })
    }

    render(){
      const { redirect, loading } = this.state
      const from = this.props.location.state ? this.props.location.state.from : '/'
      return(
        <AuthPageTemplate
          handleSubmit={this.handleSubmit.bind(this)}
        >        
          <TextField
            box
            label='Username'
          >
            <Input
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange.bind(this)}
            />
          </TextField> 

          <TextField
            box
            label='Email'
          >
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange.bind(this)}
            />
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

          <SignUpBtn 
            raised
            redirect={redirect}
            from={from}
            loading={loading}
          />

          <StyledDiv>
            <span className="mdc-typography--body2 mdc-theme-neutral--color">
              or
            </span>

            <SignInLinkWithRouter />
          </StyledDiv>    
        </AuthPageTemplate>
      )
    }
  }

SignUpPage.defaultProps = {
  location: {
    state: {
      from: "/",
      fromSearch: "",
    }
  }
}

SignUpPage.propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userLoginSuccess: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.user.isLoggedIn,
      username: state.user.username,
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginSuccess: (payload) => {
      dispatch(userLoginSuccess(payload))
  }
})

SignUpPage = graphql(
  CREATE_USER
)(SignUpPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);