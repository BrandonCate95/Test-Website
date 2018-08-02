import React from 'react'
import styled from 'styled-components'
import { Query } from "react-apollo"
import SEARCH_CONTENT from '../query/SEARCH_CONTENT'
import Spinner from '../../components/misc/Spinner'

const StyledLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchContent = (props) => (
    <Query
      query={SEARCH_CONTENT}
      variables={{ text: props.search }}
      skip={!props.search}
      notifyOnNetworkStatusChange
      fetchPolicy='network-only'
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if (error) return `Error!: ${error}`;
        if (loading) return <StyledLoading><Spinner large primary/></StyledLoading>
        return (
          <React.Fragment>
            {React.cloneElement(props.children, {loading, error, data, refetch, networkStatus, sideBarOpen: props.sideBarOpen})}
          </React.Fragment>
        );
      }}
    </Query>
)

export default SearchContent