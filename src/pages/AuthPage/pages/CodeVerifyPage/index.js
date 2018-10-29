import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Auth} from 'aws-amplify'
import CodeVerifyBtn from './components/CodeVerifyBtn'
import { connect } from 'react-redux'
import { userEmailVerified } from '../../../../actions/actions'
import AuthPageTemplate from '../../template/AuthPageTemplate'
import Button from '../../../../components/mdc/Button'

import TextField from '../../../../components/mdc/TextField'
import Input from '../../../../components/mdc/Input'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

class CodeVerify extends React.Component {

    state = {
        code: '',
        redirectToReferrer: false,
        error: '',
        verifyLoading: false,
        resendLoading: false,
    }
  
    //mabye add this as a utility function?
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
        this.setState({verifyLoading: true})
        Auth.verifyCurrentUserAttributeSubmit('email', this.state.code)
            .then(() => {
                this.props.userEmailVerified()
                this.setState({ verifyLoading: false, redirectToReferrer: true })
            })
            .catch(err => { console.log(err); this.setState({verifyLoading: false}) } );
    }

    handleResend = async () => {
        this.setState({resendLoading: true})
        await Auth.verifyCurrentUserAttribute('email')
        this.setState({resendLoading: false})
    }

    handleLater = () => {
        this.setState({ redirectToReferrer: true })
    }

    render(){
        const { redirectToReferrer, verifyLoading, resendLoading } = this.state
        const from = this.props.location.state ? this.props.location.state.from : '/'
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                </TextField> 


                <CodeVerifyBtn 
                    redirectToReferrer={redirectToReferrer}
                    from={from}
                    loading={verifyLoading}
                />

                <StyledDiv>
                    <Button
                        onClick={this.handleResend.bind(this)}
                        style={{marginRight: "auto"}}
                        loading={resendLoading}
                    >
                        Resend Verification Code
                    </Button>

                    <span className="mdc-typography--body2 mdc-theme-neutral--color">
                        or
                    </span>

                    <Button
                        onClick={this.handleLater.bind(this)}
                    >
                        Verify Later
                    </Button>
                </StyledDiv>                
            </AuthPageTemplate>
        )
    }
}

CodeVerify.propTypes = {
    userEmailVerified: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    userEmailVerified: () => {
        dispatch(userEmailVerified())
    }
  })

export default connect(
    null,
    mapDispatchToProps
)(CodeVerify)