import React from 'react'
import { Query } from "react-apollo"
import GET_POST from '../query/GET_POST'

const GetPost = (props) => (
    <Query
      query={GET_POST}
      variables={{ 
        postId: props.postId || 'null',  
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

export default GetPost