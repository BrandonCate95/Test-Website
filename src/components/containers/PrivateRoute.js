import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) => authenticated 
        ? <Component {...props} />
        : <Redirect to={{pathname: '/Auth/SignIn', state: {from: props.location}}} />
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

PrivateRoute.defaultProps = {
  state: {
    from: '/'
  }
} 

const mapStateToProps = (state) => {
  return {
      authenticated: state.user.authenticated,   
  }
}
 
export default connect(
    mapStateToProps,
    null,
 )(PrivateRoute)