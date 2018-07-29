import gql from "graphql-tag"

const DELETE_IMG = gql`
  mutation deleteImg($imgId: ID!) {
    deleteImg(imgId: $imgId) {
        imgId
        identityId
        visibility
        file{
            key
            bucket
            region
        }
    }
  }
`

export default DELETE_IMG