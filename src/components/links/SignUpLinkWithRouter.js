import React from 'react'
import AuthPageLink from './AuthPageLink'

const SignUpLinkWithRouter = () => (
  <AuthPageLink
    to='/Auth/SignUp'
  >
    Sign Up
  </AuthPageLink>
)

export default SignUpLinkWithRouter