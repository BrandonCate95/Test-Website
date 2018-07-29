import gql from 'graphql-tag'

const GET_ES_POST = gql`
query getESPost($id: ID!) {
  getESPost(id: $id){
    identityId
    imgKey
    imgClass
    title
    content
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

export default GET_ES_POST