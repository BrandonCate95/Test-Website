import React from 'react'
import { Mutation } from 'react-apollo'
import { connect } from 'react-redux'
import DELETE_POST from '../mutation/DELETE_POST'
import GET_POST from '../../queries/query/GET_POST'
import LIST_USER_POSTS from '../../queries/query/LIST_USER_POSTS'

const DeletePost = (props) => (
    <Mutation 
        mutation={DELETE_POST}
        update={ (cache, { data: { deletePost } }) => {

            const data = cache.readQuery({ query: LIST_USER_POSTS, variables: { identityId: props.identityId } })
            
            data.listUserPosts.posts = [
                ...data.listUserPosts.posts.filter((post) => post.postId !== deletePost.postId),
            ]

            cache.writeQuery({
                query: LIST_USER_POSTS,
                variables: { identityId: props.identityId },
                data,
            })

            cache.writeQuery({
                query: GET_POST,
                variables: { postId: deletePost.postId },
                data: { getPost: null },
            })

        }}
    >
        {(deletePost, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, deletePostMutation: async (postId) => {
                return await deletePost({ variables: { postId } }) 
            },
            ...props,
        })
        )}
    </Mutation>
)

const mapStateToProps = (state) => {
    return {
        identityId: state.user.identityId,   
    }
}
   
export default connect(
    mapStateToProps,
    null,
)(DeletePost)