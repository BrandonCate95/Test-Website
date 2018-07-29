import React from 'react'
import { Route } from 'react-router-dom'
import CodeVerify from './pages/CodeVerifyPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPasswordAuth from './pages/ForgotPasswordAuth'

const AuthPage = ({ match }) => (
    <React.Fragment>
        <Route path={`${match.url}/CodeVerify`} component={CodeVerify} />
        <Route path={`${match.url}/SignIn`} component={SignInPage} />
        <Route path={`${match.url}/SignUp`} component={SignUpPage} />
        <Route path={`${match.url}/ForgotPassword`} component={ForgotPasswordAuth} />
    </React.Fragment>
)

export default AuthPage