import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class PrivateUserRoute extends React.Component {

  state = {
    loading: true,
    allowed: false,
    redirect: {},
  }

  componentWillMount = async () => {
    try{
      var checkedUsername = (await Auth.currentUserInfo()).username;
    }catch(e){
      //not logged in
      this.setState({
        loading: false,
        allowed: false,
        redirect: { //not logged in redirect to login
          pathname: '/Auth/SignIn',
          state: {from: this.props.location}
        }
      })
    }
    let pageUser = this.props.match ? this.props.match.params.user : this.props.computedMatch.params.user
    this.setState({
        loading: false,
        allowed: pageUser === checkedUsername,
        redirect: { //usernames dont match probably trying to hack
          pathname: '/'
        }
    })
  }

  render() {
    const {component: Component, ...rest} = this.props;
    const { loading, allowed, redirect } = this.state
    if(loading) return null
    return(
      <Route
        {...rest}
        render={(props) => allowed 
            ? <Component {...props} />
            : <Redirect to={redirect} />
        }
      />
    )
  }
}

PrivateUserRoute.propTypes = {
  component: PropTypes.func.isRequired,
}
 
export default PrivateUserRoute