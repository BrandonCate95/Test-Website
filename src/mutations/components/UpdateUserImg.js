import React from 'react'
import { Mutation } from "react-apollo"
import UPDATE_USER_IMG from '../mutation/UPDATE_USER_IMG'

const UpdateUserImg = (props) => (
    <Mutation mutation={UPDATE_USER_IMG}>
        {(updateUserImg, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, updateUserImgMutation: async (name, file) => { 
                return await updateUserImg({ variables: { name, file } }) 
            },
            ...props
        })
        )}
    </Mutation>  
)

export default UpdateUserImg