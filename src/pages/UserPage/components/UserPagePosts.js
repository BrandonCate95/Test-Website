import React from 'react'
import PropTypes from 'prop-types'
import VerticalCard from '../../../components/groups/VerticalCard'

const UserPagePosts = ({data, logoImg, username, identityId}) => (
    data.listUserPosts.posts.map((post) => 
        <VerticalCard 
            key={post.postId}
            postId={post.postId}
            title={post.title}
            imgKey={post.imgKey}
            logoImg={logoImg}
            username={username}
            identityId={identityId}
            drafts={false}
            draftEdit={false}
        />
    )
)

UserPagePosts.propTypes = {
    data: PropTypes.object,
    logoImg: PropTypes.object,
    username: PropTypes.string,
    identityId: PropTypes.string,
}

export default UserPagePosts