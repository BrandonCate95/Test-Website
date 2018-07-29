import gql from "graphql-tag"

const CREATE_IMG = gql`
  mutation createImg($imgId: ID!, $visibility: Visibility, $file: S3ObjectInput) {
    createImg(imgId: $imgId, visibility: $visibility, file: $file) {
      imgId
      identityId
      file{
          key
          bucket
          region
      }
    }
  }
`

export default CREATE_IMG