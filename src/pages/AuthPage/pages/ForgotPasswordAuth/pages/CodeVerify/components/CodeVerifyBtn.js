import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Button from '../../../../../../../components/mdc/Button'

const LoginBtn = ({redirectToReferrer, to, loading}) => {  
    if (redirectToReferrer) {
      return <Redirect to={
        to.state ? 
          to.state.fromSearch ?
            { 
              pathname: to.state.from,
              search: to.state.fromSearch, 
            }  
          :
            to.state.from
        : 
          {
            pathname: "/" 
          }
      } 
      />
    }
      
    return (
      <Button
        type="submit"
        raised
        loading={loading}
      >
        Confirm New Password
      </Button>
    )
}
  

LoginBtn.propTypes = {
  redirectToReferrer: PropTypes.bool.isRequired,
  to: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]).isRequired,
      fromSearch: PropTypes.string
    })
  }),
  loading: PropTypes.bool.isRequired,
}

export default LoginBtn