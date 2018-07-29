import gql from "graphql-tag"

const UPDATE_USER_IMG = gql`
mutation updateUserImg($name: String, $file: S3ObjectInput) {
    updateUserImg(
      name: $name
      file: $file
    ){
        pageImg{
            file{
                key
            }
        }
        logoImg{
            file{
                key
            }
        }
    }
  }
`

export default UPDATE_USER_IMG