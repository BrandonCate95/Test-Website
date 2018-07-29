import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../../../components/mdc/Button'
import UpdateUserAttributes from '../../../mutations/components/UpdateUserAttributes'

const UserPageEditSideBarContent = ({userMatch, user, updateUserAttributesMutation, userInput, loading}) => (
  <React.Fragment>

    {userMatch &&
        <Link to={`/${user}`} className="mdc-list-item mdc-theme-neutral--color">
            Back
        </Link>
    }  

    <Button
        onClick={() => updateUserAttributesMutation({ description: userInput.description })}
        style={{width: "100%"}}
        className="mdc-list-item mdc-theme-neutral--color"
        loading={loading}
    >
        Submit Changes
    </Button>

  </React.Fragment>
)

UserPageEditSideBarContent.propTypes = {
    userMatch: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
    updateUserAttributesMutation: PropTypes.func,
    userInput: PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

const ContentWithMutation = (props) => (
    <UpdateUserAttributes>
        <UserPageEditSideBarContent {...props} />
    </UpdateUserAttributes>
)

export default ContentWithMutation