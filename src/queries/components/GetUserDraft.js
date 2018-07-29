import React from 'react'
import GET_USER_DRAFT from '../query/GET_USER_DRAFT'
import { ApolloConsumer } from 'react-apollo'

const GetUserDraft = (props) => (
    <ApolloConsumer>
        {client => (
            React.cloneElement(props.children, {
                getUserDraft: async (postId) => {
                    const { error, data } = await client.query({
                        query: GET_USER_DRAFT,
                        variables: { postId },
                        fetchPolicy: 'network-only',
                    })
                    return data || error
                },
                ...props,
            })
        )}
    </ApolloConsumer>
)

export default GetUserDraft