import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Button from '../../../../../components/mdc/Button'

const SignUpBtn = ({redirect, from, loading}) => {  
    if (redirect) {
        return <Redirect to={{
            pathname: '/Auth/CodeVerify',
            state: { from },
        }} />
    }
      
    return (
        <Button
            type="submit"
            raised
        >
            Sign Up
        </Button>
    )
}

SignUpBtn.propTypes = {
    redirect: PropTypes.bool.isRequired,
    from: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SignUpBtn