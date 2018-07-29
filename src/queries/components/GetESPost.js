import React from 'react'
import { Query } from "react-apollo"
import GET_ES_POST from '../query/GET_ES_POST'

const GetESPost = (props) => (
    <Query
      query={GET_ES_POST}
      variables={{ 
        id: props.postId || 'null',  
      }}
      notifyOnNetworkStatusChange
      fetchPolicy='network-only'
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if(loading) return null
        return (
          <React.Fragment>
            {React.cloneElement(props.children, {loading, error, data, refetch, networkStatus, ...props})}
          </React.Fragment>
        );
      }}
    </Query>
)

export default GetESPost