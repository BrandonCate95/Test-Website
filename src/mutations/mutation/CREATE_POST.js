import gql from 'graphql-tag'

const CREATE_POST = gql`
mutation createPost($postData: PostInput!) {
    createPost(
      postData: $postData
    ){
      postId
      identityId
      title
      imgKey
    }
  }
`

export default CREATE_POST