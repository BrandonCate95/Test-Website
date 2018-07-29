import React from 'react'
import PropTypes from 'prop-types'
import GetESPost from '../../queries/components/GetESPost'
import PostPageWithQuery from './components/PostPageWithQuery'

const PostPageContainer = ({match}) => (
    <GetESPost
        postId={match.params.page}
    >
        <PostPageWithQuery />
    </GetESPost>
)

PostPageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            page: PropTypes.string.isRequired,
        })
    }),
}

export default PostPageContainer