import gql from "graphql-tag"

const GET_USER_BY_USERNAME = gql`
query getUserByUsername($username: String!) {
  getUserByUsername(
      username: $username
  ){
    users {
      identityId
      username
      followers
      description
      logoImg {
        file {
          region
          bucket
          key
        }
      }
      pageImg {
        file {
          region
          bucket
          key
        }
      }
    }
  }
}
`

export default GET_USER_BY_USERNAME