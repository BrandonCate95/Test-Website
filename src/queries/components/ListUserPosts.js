import React from 'react'
import { Query } from "react-apollo"
import LIST_USER_POSTS from '../query/LIST_USER_POSTS'

const ListUserPosts = (props) => (
    <Query
      query={LIST_USER_POSTS}
      variables={{identityId: props.identityId}}
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

export default ListUserPosts