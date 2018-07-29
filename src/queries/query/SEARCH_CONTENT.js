import gql from 'graphql-tag'

const SEARCH_CONTENT = gql`
  query searchContent($text: String!) {
    searchContent(text: $text) {
        postId
        identityId
        title
        searchDescription
        imgKey
        userData{
          username
          logoImg{
            file{
              key
            }
          }
        }
    }
  }
`

export default SEARCH_CONTENT