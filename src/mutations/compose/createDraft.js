import { graphql } from 'react-apollo'
import CREATE_DRAFT from '../mutation/CREATE_DRAFT'

export default graphql(CREATE_DRAFT, {
    props: (props) => ({
        createDraft: (draftData) => {
            props.mutate({
                variables: {draftData}
            })
        }
    }),
    options: {
        ssr: false,
        update: (cache, { data: { createDraft } }) => {
            const data = cache.readQuery({ query: LIST_USER_DRAFTS })
            
            data.listUserDrafts.drafts = [
                ...data.listUserDrafts.drafts.filter((draft) => draft.postId !== createDraft.postId),
                createDraft
            ]

            cache.writeQuery({
                query: LIST_USER_DRAFTS,
                data,
            })
        }
    }
})