import gql from 'graphql-tag'

const UPDATE_POST = gql`
mutation updatePost($postData: PostInput!) {
    updatePost(
      postData: $postData
    ){
      postId
      identityId
      title
      imgKey
    }
  }
`

export default UPDATE_POST