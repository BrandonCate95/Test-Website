import gql from "graphql-tag"

const UPDATE_USER_ATTRIBUTES = gql`
mutation updateUserAttributes($userData: UserInput) {
    updateUserAttributes(
      userData: $userData
    ){
      username
      followers
      description
    }
  }
`

export default UPDATE_USER_ATTRIBUTES