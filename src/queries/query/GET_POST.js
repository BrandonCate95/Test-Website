import gql from 'graphql-tag'

const GET_POST = gql`
query getPost($postId: ID!) {
  getPost(postId: $postId){
    postId
  }
}
`

export default GET_POST