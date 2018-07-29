import gql from "graphql-tag"

const CREATE_USER = gql`
  mutation createUser($username: String!, $sub: String!) {
    createUser(username: $username, sub: $sub) {
      identityId
      username
      sub
      followers
    }
  }
`

export default CREATE_USER