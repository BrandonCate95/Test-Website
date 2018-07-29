import React from 'react'
import PropTypes from 'prop-types'
import UpdatePostPopup from '../popups/UpdatePostPopup'
import DeletePostPopup from '../popups/DeletePostPopup'
import UploadPostPopup from '../popups/UploadPostPopup'
import DeleteDraftPopup from '../popups/DeleteDraftPopup'

const PostCRUDPopups = (props) => (
    <React.Fragment>
        <UpdatePostPopup 
            postId={props.postId}
            draftGet={true}
            disabled={!props.data.getPost ? true : false}
        />  
        <DeletePostPopup 
            postId={props.postId}
            disabled={!props.data.getPost ? true : false}
        />  
        <UploadPostPopup 
            postId={props.postId}
            draftGet={true}
            disabled={props.data.getPost && props.data.getPost.postId ? true : false}
        />
        <DeleteDraftPopup 
            postId={props.postId}
            disabled={props.data.getPost && props.data.getPost.postId ? true : false}
        />
    </React.Fragment>
)

PostCRUDPopups.propTypes = {
    postId: PropTypes.string,
    data: PropTypes.shape({
        getPost: PropTypes.shape({
            postId: PropTypes.string.isRequired,
        }),
    })
}

export default PostCRUDPopups