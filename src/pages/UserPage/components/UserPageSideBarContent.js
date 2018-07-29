import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserPageSideBarContent = ({userMatch, user}) => (
    userMatch &&
        <Link to={`/${user}/edit`} className="mdc-list-item mdc-theme-neutral">
            Edit Page
        </Link>
)

UserPageSideBarContent.propTypes = {
    userMatch: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
}

export default UserPageSideBarContent