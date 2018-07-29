import gql from 'graphql-tag'

const LIST_USER_DRAFTS = gql`
query listUserDrafts{
  listUserDrafts{
    drafts{
      postId
      identityId
      title
      imgKey
    }
  }
}
`

export default LIST_USER_DRAFTS