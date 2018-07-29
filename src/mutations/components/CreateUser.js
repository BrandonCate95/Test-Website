import React from 'react'
import { Mutation } from 'react-apollo'
import { Auth } from 'aws-amplify'
import CREATE_USER from '../mutation/CREATE_USER'

const CreateUser = (props) => (
    <Mutation mutation={CREATE_USER}>
        {(createUser, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, createUserMutation: async () => {
                const data = await Auth.currentUserPoolUser()
                return await createUser({ variables: {
                    username: data.username,
                    sub: data.signInUserSession.idToken.payload.sub,
                }})
            }})
        )}
    </Mutation>
)

export default CreateUser