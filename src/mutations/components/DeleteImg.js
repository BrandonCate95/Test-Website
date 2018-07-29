import React from 'react'
import { Mutation } from 'react-apollo'
import { Storage } from 'aws-amplify'
import DELETE_IMG from '../mutation/DELETE_IMG'

const DeleteImg = (props) => (
    <Mutation mutation={DELETE_IMG}>
        {(deleteImg, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, deleteImgMutation: async (imgId) => {
                const res = await deleteImg({ variables: { imgId: imgId.split('.')[0] } })
                if(res.data && res.data.deleteImg){
                    Storage.remove(`imgs/${imgId}`, { level: res.data.deleteImg.visibility})
                        .then((data) => data)
                        .catch((error) => error)
                }else{
                    return res
                }
            },
            ...props
        })
        )}
    </Mutation>
)

export default DeleteImg