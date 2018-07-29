import React from 'react'
import { Mutation } from 'react-apollo'
import CREATE_DRAFT from '../mutation/CREATE_DRAFT'
import LIST_USER_DRAFTS from '../../queries/query/LIST_USER_DRAFTS'

const CreateDraft = (props) => (
    <Mutation 
        mutation={CREATE_DRAFT}
        update={ (cache, { data: { createDraft } }) => {
            const data = cache.readQuery({ query: LIST_USER_DRAFTS })
            
            data.listUserDrafts.drafts = [
                ...data.listUserDrafts.drafts.filter((draft) => draft.postId !== createDraft.postId),
                createDraft
            ]

            cache.writeQuery({
                query: LIST_USER_DRAFTS,
                data,
            })
        }}
    >
        {(createDraft, { loading, error, data }) => (
            React.cloneElement(props.children, {loading, error, data, createDraftMutation: async (draftData) => {
                return await createDraft({ variables: { draftData } })
            },
            ...props
        })
        )}
    </Mutation>
)

export default CreateDraft