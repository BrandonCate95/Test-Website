import gql from "graphql-tag"

const CREATE_DRAFT = gql`
  mutation createDraft($draftData: DraftInput) {
    createDraft(draftData: $draftData) {
      postId
      identityId
    }
  }
`

export default CREATE_DRAFT