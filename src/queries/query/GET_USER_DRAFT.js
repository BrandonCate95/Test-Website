import gql from 'graphql-tag'

const GET_USER_DRAFT = gql`
query getUserDraft($postId: ID!){
  getUserDraft(postId: $postId){
    postId
    title
    content
    imgKey
    imgClass
  }
}`

export default GET_USER_DRAFT
