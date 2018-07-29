import gql from "graphql-tag"

const UPDATE_DRAFT = gql`
  mutation updateDraft($draftData: DraftInput!) {
    updateDraft(draftData: $draftData) {
      postId
      identityId
    }
  }
`

export default UPDATE_DRAFT