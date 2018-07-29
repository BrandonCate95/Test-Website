import gql from "graphql-tag"

const UPDATE_IMG = gql`
  mutation updateImg($imgId: ID!, $visibility: Visibility, $file: S3ObjectInput) {
    updateImg(imgId: $imgId, visibility: $visibility, file: $file) {
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

export default UPDATE_IMG