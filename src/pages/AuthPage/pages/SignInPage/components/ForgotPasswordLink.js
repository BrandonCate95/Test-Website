import React from 'react'
import AuthPageLink from '../../../../../components/links/AuthPageLink'

const ForgotPasswordLink = () => (
    <AuthPageLink
        to="/Auth/ForgotPassword/CodeSend"
        style={{marginRight: "auto"}}
    >
        Forgot Password?
    </AuthPageLink>
)

export default ForgotPasswordLink