import gql from 'graphql-tag'

const GET_NEO4J = gql`
query getNeo4j {
  getNeo4j{
    neo4j{
      postId
      title
    }
  }
}
`

export default GET_NEO4J