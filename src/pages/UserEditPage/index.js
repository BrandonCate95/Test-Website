import React from 'react'
import GetUserByUsername from '../../queries/components/GetUserByUsername'
import UserPageEdit from './components/UserEditPageWithQuery'

const UserPageEditContainer = (props) => (
    <GetUserByUsername username={props.match.params.user}>
        <UserPageEdit 
            user={props.match.params.user}
        />
    </GetUserByUsername>
)

export default UserPageEditContainer



