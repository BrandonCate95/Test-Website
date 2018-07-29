import gql from 'graphql-tag'

const DELETE_DRAFT = gql`
mutation deleteDraft($postId: ID!) {
    deleteDraft(
      postId: $postId
    ){
      postId
    }
  }
`

export default DELETE_DRAFT