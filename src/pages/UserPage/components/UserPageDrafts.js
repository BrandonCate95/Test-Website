
import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import Spinner from '../../../components/misc/Spinner'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner large primary /></div>

const VerticalCard = Loadable({
  loader: () => import('../../../components/groups/VerticalCard'),
  loading: Loading,
})

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