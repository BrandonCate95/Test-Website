import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Auth} from 'aws-amplify'
import SignInLinkWithRouter from '../../../../../../components/links/SignInLinkWithRouter'
import CodeSendBtn from './components/CodeSendBtn'
import AuthPageTemplate from '../../../../template/AuthPageTemplate'

import TextField from '../../../../../../components/mdc/TextField'
import Input from '../../../../../../components/mdc/Input'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class CodeSend extends React.Component {

    state = {
        username: '',
        redirect: false,
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
        Auth.forgotPassword(this.state.username)
            .then(() => {
                this.setState({ loading: false, redirect: true })
            })
            .catch(err => { console.log(err); this.setState({loading: false}) } );
    }

    render(){
        const { redirect, loading, username } = this.state
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
                        onChange={this.handleInputChange.bind(this)}/>
                </TextField> 


                <CodeSendBtn 
                    redirect={redirect}
                    from={from}
                    loading={loading}
                    username={username}
                />

                <StyledDiv>
                    <span className="mdc-typography--body2 mdc-theme-neutral--color">or</span>
                    <SignInLinkWithRouter />
                </StyledDiv>
                
            </AuthPageTemplate>
        )
    }
}

CodeSend.propTypes = {
    location: PropTypes.object.isRequired,
}

export default CodeSend