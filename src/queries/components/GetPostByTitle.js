import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import GET_POST_BY_TITLE from '../query/GET_POST_BY_TITLE'

const GetPostByTitle = (props) => (
    <ApolloConsumer>
        {client => (
            React.cloneElement(props.children, {
                getPostByTitle: async (title) => {
                    const { error, data } = await client.query({
                        query: GET_POST_BY_TITLE,
                        variables: { title },
                        fetchPolicy: 'network-only',
                    })
                    return data.getPostByTitle.posts || error
                },
                ...props,
            })
        )}
    </ApolloConsumer>
)

export default GetPostByTitle