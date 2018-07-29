import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Button from '../../../../../components/mdc/Button'

const CodeVerifyBtn = ({loading, redirectToReferrer, from}) => {  
    if (redirectToReferrer) {
        return <Redirect to={from} />
    }      
    return (
        <Button
            type="submit"
            raised
            loading={loading}
        >
            Verify
        </Button>
    )
}

CodeVerifyBtn.propTypes = {
    loading: PropTypes.bool.isRequired,
    redirectToReferrer: PropTypes.bool.isRequired,
    from: PropTypes.string.isRequired,
}

export default CodeVerifyBtn