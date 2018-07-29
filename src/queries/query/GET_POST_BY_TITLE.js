import gql from 'graphql-tag'

const GET_POST_BY_TITLE = gql`
query getPostByTitle($title: String!) {
  getPostByTitle(title: $title){
    posts{
      postID
    }
  }
}
`

export default GET_POST_BY_TITLE