import React from 'react'
import { Mutation } from "react-apollo"
import UPDATE_USER_ATTRIBUTES from '../mutation/UPDATE_USER_ATTRIBUTES'

const UpdateUserAttributes = (props) => (
    <Mutation mutation={UPDATE_USER_ATTRIBUTES}>
        {(updateUserAttributes, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, updateUserAttributesMutation: async (userData) => { 
                return await updateUserAttributes({ variables: { userData } }) 
            },
            ...props
        })
        )}
    </Mutation>  
)

export default UpdateUserAttributes