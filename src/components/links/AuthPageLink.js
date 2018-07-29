import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Button from '../mdc/Button'

const AuthPageLink = ({to, location, style, children}) => {
    
  let locObj = {
    pathname: to,
  }
  if(['/Auth/SignUp', '/Auth/SignIn', '/Auth/CodeVerify', '/Auth/ForgotPassword/CodeVerify', '/Auth/ForgotPassword/CodeSend'].indexOf(location.pathname) === -1){
    locObj.state = { from: location.pathname, fromSearch: location.search };
  }else{
    locObj.state = location.state ? { from: location.state.from, fromSearch: location.state.fromSearch } : { from: '/'};
  }

  return (
    <Button
      link
      linkTo={locObj}
      style={{margin: "5px", ...style}}
    >
      {children}
    </Button>
  )
}

AuthPageLink.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      from: PropTypes.string.isRequired,
      fromSearch: PropTypes.string,
    })
  }),
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
}

//adds access to location prop
export default withRouter(AuthPageLink)