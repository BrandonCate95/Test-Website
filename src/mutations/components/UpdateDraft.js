import React from 'react'
import { Mutation } from 'react-apollo'
import UPDATE_DRAFT from '../mutation/UPDATE_DRAFT'

const UpdateDraft = (props) => (
    <Mutation mutation={UPDATE_DRAFT}>
        {(updateDraft, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, updateDraftMutation: async (draftData) => {
                return await updateDraft({ variables: { draftData } })
            },
            ...props
        })
        )}
    </Mutation>
)

export default UpdateDraft