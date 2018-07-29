import React from 'react'
import PropTypes from 'prop-types'
import { Mutation, graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import CREATE_IMG from '../mutation/CREATE_IMG'
import CREATE_POST from '../mutation/CREATE_POST'
import GET_POST from '../../queries/query/GET_POST'
import LIST_USER_POSTS from '../../queries/query/LIST_USER_POSTS'
import formatPostObjPromise from '../../utilities/formatPostObjPromise'
import getFileFromDraftKey from '../../utilities/getFileFromDraftKey'
import formatFileToPostImg from '../../utilities/formatFileToPostImg'

const CreatePost = (props) => (
    <Mutation 
        mutation={CREATE_POST}
        update={ (cache, { data: { createPost } }) => {

            const data = cache.readQuery({ query: LIST_USER_POSTS, variables: { identityId: props.identityId } })
            
            data.listUserPosts.posts = [
                ...data.listUserPosts.posts.filter((post) => post.postId !== createPost.postId),
                createPost
            ]

            cache.writeQuery({
                query: LIST_USER_POSTS,
                variables: { identityId: props.identityId },
                data,
            })

            cache.writeQuery({
                query: GET_POST,
                variables: { postId: createPost.postId },
                data: { getPost: { postId: createPost.postId, __typename: "Post" } },
            })

        }}
    >
        {(createPost, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, createPostMutation: async (postData) => {
                var {imgKeys, uploadObj} = await formatPostObjPromise(postData)

                imgKeys.forEach(async (id) => {
                    var file = await getFileFromDraftKey(id)
                    file = await formatFileToPostImg(file, postData.postId, id)
                    await props.createImgMutation(id, 'protected', file)
                })

                var mainImgFile = await getFileFromDraftKey(postData.imgKey)
                const newImgKey = uuidv4()
                mainImgFile = await formatFileToPostImg(mainImgFile, postData.postId, newImgKey)
                await props.createImgMutation(postData.imgKey, 'protected', mainImgFile)
                uploadObj.imgKey = `imgs/${postData.postId}/${newImgKey}`

                return await createPost({ variables: { postData: uploadObj } })
            }})
        )}
    </Mutation>
)

CreatePost.propTypes = {
    identityId: PropTypes.string.isRequired, 
    createImgMutation: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        identityId: state.user.identityId,   
    }
}

export default compose(
    graphql(CREATE_IMG, {
        props: (props) => ({
            createImgMutation: async (imgId, visibility, file) => {
                props.mutate({
                    variables: { imgId, visibility, file },
                })
            },
        })
    }),
    connect(
        mapStateToProps,
        null,
    )
)(CreatePost);