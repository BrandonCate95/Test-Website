import React from 'react'
import { Mutation } from 'react-apollo'
import DELETE_DRAFT from '../mutation/DELETE_DRAFT'
import LIST_USER_DRAFTS from '../../queries/query/LIST_USER_DRAFTS'

const DeleteDraft = (props) => (
    <Mutation 
        mutation={DELETE_DRAFT}
        update={ (cache, { data: { deleteDraft } }) => {
            const data = cache.readQuery({ query: LIST_USER_DRAFTS })
            
            data.listUserDrafts.drafts = [
                ...data.listUserDrafts.drafts.filter((draft) => draft.postId !== deleteDraft.postId),
            ]

            cache.writeQuery({
                query: LIST_USER_DRAFTS,
                data,
            })
        }}
    >
        {(deleteDraft, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, deleteDraftMutation: async (postId) => {
                return await deleteDraft({ variables: { postId } })
            },
            ...props
        })
        )}
    </Mutation>
)

export default DeleteDraft