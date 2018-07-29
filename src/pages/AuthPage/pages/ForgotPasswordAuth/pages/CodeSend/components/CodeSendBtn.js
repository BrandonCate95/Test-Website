import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Button from '../../../../../../../components/mdc/Button'

const CodeSendBtn = ({loading, redirect, from, username}) => {  
    if (redirect) {
        return <Redirect to={{
            pathname: '/Auth/ForgotPassword/CodeVerify',
            state: { from, username },
        }} />
    }
      
    return (
        <Button
            type="submit"
            raised
            loading={loading}
        >
            Send Code
        </Button>
    )
}

CodeSendBtn.propTypes = {
    loading: PropTypes.bool.isRequired,
    redirect: PropTypes.bool.isRequired,
    from: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    username: PropTypes.string.isRequired,
}

export default CodeSendBtn