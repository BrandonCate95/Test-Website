import gql from 'graphql-tag'

const GET_POST = gql`
query listUserPosts($identityId: String!) {
  listUserPosts(identityId: $identityId){
    posts{
      postId
      identityId
      title
      imgKey
    }
  }
}
`

export default GET_POST