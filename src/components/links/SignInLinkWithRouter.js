import React from 'react'
import AuthPageLink from './AuthPageLink'

const SignInLinkWithRouter = () => (
  <AuthPageLink
    to='/Auth/SignIn'
  >
    Sign In
  </AuthPageLink>
)

export default SignInLinkWithRouter