import React from 'react'
import { Query } from "react-apollo"
import GET_USER_BY_USERNAME from '../query/GET_USER_BY_USERNAME'

const GetUserByUsername = (props) => (
    <Query
      query={GET_USER_BY_USERNAME}
      variables={{ username: props.username }}
      skip={!props.username}
      notifyOnNetworkStatusChange
      fetchPolicy='network-only'
      ssr={true}
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if (error) return `Error!: ${error}`;
        if (loading) return null;
        return (
          <React.Fragment>
            {React.cloneElement(props.children, {loading, error, data: typeof data === 'undefined' ? data : data.getUserByUsername.users[0], refetch, networkStatus})}
          </React.Fragment>
        );
      }}
    </Query>
)

export default GetUserByUsername