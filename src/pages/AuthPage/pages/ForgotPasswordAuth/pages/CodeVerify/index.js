import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Auth from '@aws-amplify/auth/lib'
import SignInLinkWithRouter from '../../../../../../components/links/SignInLinkWithRouter'
import CodeVerifyBtn from './components/CodeVerifyBtn'
import AuthPageTemplate from '../../../../template/AuthPageTemplate'

import TextField from '../../../../../../components/mdc/TextField'
import Input from '../../../../../../components/mdc/Input'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class CodeVerify extends React.Component {

    state = {
        code: '',
        passsword: '',
        redirectToReferrer: false,
        error: '',
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
        Auth.forgotPasswordSubmit(this.props.location.state.username, this.state.code, this.state.password)
            .then(() => {
                this.setState({ loading: false, redirectToReferrer: true })
            })
            .catch(err => { console.log(err); this.setState({loading: false}) } );
    }

    render(){
        const { redirectToReferrer, loading } = this.state
        return(
            <AuthPageTemplate
                handleSubmit={this.handleSubmit.bind(this)}
            >

                <TextField
                    box
                    label='Code'
                >
                    <Input
                        name="code"
                        value={this.state.code}
                        onChange={this.handleInputChange.bind(this)}/>
                </TextField> 

                <TextField
                    box
                    label='New Password'
                >
                    <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange.bind(this)}
                        required minLength="8"
                        />
                </TextField> 

                <CodeVerifyBtn 
                    redirectToReferrer={redirectToReferrer}
                    to={ {state: this.props.location.state} }
                    loading={loading}
                />

                <StyledDiv>
                    <span className="mdc-typography--body2 mdc-theme-neutral--color">or</span>
                    <SignInLinkWithRouter />
                </StyledDiv>
                

            </AuthPageTemplate>
        )
    }
}

CodeVerify.propTypes = {
    location: PropTypes.object.isRequired,
}

export default CodeVerify