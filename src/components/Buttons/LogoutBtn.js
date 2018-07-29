import React from 'react'
import PropTypes from 'prop-types'
import Button from '../mdc/Button'
import { connect } from 'react-redux'
import { userLogout } from '../../actions/actions'


const LogoutBtn = (props) => (
    <Button
        onClick={props.userLogout}
        {...props}
    >
        Logout
    </Button>
)

LogoutBtn.propTypes = {
    userLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => {
        dispatch(userLogout())
    }
})

export default connect(
    null,
    mapDispatchToProps
)(LogoutBtn)