import React from 'react'
import { Mutation } from 'react-apollo'
import CREATE_IMG from '../mutation/CREATE_IMG'

const CreateImg = (props) => (
    <Mutation mutation={CREATE_IMG}>
        {(createImg, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, createImgMutation: async (imgId, visibility, file) => {
                return await createImg({ variables: { imgId, visibility, file } })
            },
            ...props
        })
        )}
    </Mutation>
)

export default CreateImg