
import React from 'react'
import PropTypes from 'prop-types'
import VerticalCard from '../../../components/groups/VerticalCard'

const UserPageDrafts = ({data, logoImg, username, identityId, draftEdit}) => (
    data.listUserDrafts.drafts.map((post) => 
        <VerticalCard 
            key={post.postId}
            postId={post.postId}
            title={post.title}
            imgKey={post.imgKey}
            logoImg={logoImg}
            username={username}
            identityId={identityId}
            drafts={true}
            draftEdit={draftEdit}
        />
    )
)

UserPageDrafts.propTypes = {
    data: PropTypes.object,
    logoImg: PropTypes.object,
    username: PropTypes.string,
    identityId: PropTypes.string,
    draftEdit: PropTypes.bool,
}

export default UserPageDrafts