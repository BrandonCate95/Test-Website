import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={(props) => isLoggedIn 
        ? <Component {...props} />
        : <Redirect to={{pathname: '/Auth/SignIn', state: {from: props.location}}} />
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

PrivateRoute.defaultProps = {
  state: {
    from: '/'
  }
} 

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.user.isLoggedIn,   
  }
}
 
export default connect(
    mapStateToProps,
    null,
 )(PrivateRoute)