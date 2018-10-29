import { graphql } from 'react-apollo'
import UPDATE_DRAFT from '../mutation/UPDATE_DRAFT'

export default graphql(UPDATE_DRAFT, {
    props: (props) => ({
        updateDraft: (draftData) => {
            props.mutate({
                variables: {draftData}
            })
        }
    }),
    options: {
        ssr: false,
        update: (cache, { data: { updateDraft } }) => {
            const data = cache.readQuery({ query: LIST_USER_DRAFTS })
            
            data.listUserDrafts.drafts = [
                ...data.listUserDrafts.drafts.filter((draft) => draft.postId !== updateDraft.postId),
                updateDraft
            ]

            cache.writeQuery({
                query: LIST_USER_DRAFTS,
                data,
            })
        }
    }
})