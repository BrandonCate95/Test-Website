import React from 'react'
import { Mutation } from 'react-apollo'
import UPDATE_IMG from '../mutation/UPDATE_IMG'

const UpdateImg = (props) => (
    <Mutation mutation={UPDATE_IMG}>
        {(updateImg, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, updateImgMutation: async (imgId, visibility, file) => {
                console.log(imgId, visibility, file)
                const res = await updateImg({ variables: { imgId, visibility, file } })
                console.log(res)
                return res
            },
            ...props
        })
        )}
    </Mutation>
)

export default UpdateImg