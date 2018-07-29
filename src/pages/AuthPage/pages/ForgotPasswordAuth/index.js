import React from 'react'
import { Route } from 'react-router-dom'
import CodeVerify from './pages/CodeVerify'
import CodeSend from './pages/CodeSend'

const AuthPage = ({ match }) => (
    <React.Fragment>
        <Route path={`${match.url}/CodeVerify`} component={CodeVerify} />
        <Route path={`${match.url}/CodeSend`} component={CodeSend} />
    </React.Fragment>
)

export default AuthPage