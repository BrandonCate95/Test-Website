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
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if (error) return `Error!: ${error}`;
        if (loading) return null;
        return (
          <React.Fragment>
            {React.cloneElement(props.children, {loading, error, data: data.getUserByUsername ? data.getUserByUsername.users[0] : data, refetch, networkStatus})}
          </React.Fragment>
        );
      }}
    </Query>
)

export default GetUserByUsername