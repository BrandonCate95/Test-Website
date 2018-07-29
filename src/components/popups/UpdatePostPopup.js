import React from 'react'
import PropTypes from 'prop-types'
import UpdatePost from '../../mutations/components/UpdatePost'
import formatPostData from '../../utilities/formatPostData'
import GetUserDraft from '../../queries/components/GetUserDraft'
import Button from '../mdc/Button'
import PopupContainer, { Popup, PopupHeader, PopupBody, PopupFooter, CancelButton, AcceptButton } from '../mdc/Popup'

const UpdatePostPopup = (props) => (
    <PopupContainer>
        <Button
            title="update post"
            icon
            loading={props.loading}
            disabled={props.disabled}
            primary
            popup-role="button"
        >
            update
        </Button>

        <Popup
            popup-role="popup"
            onAccept={async () => {
                if(props.draftGet){
                    const data = await props.getUserDraft(props.postId)
                    await props.updatePostMutation(formatPostData(data.getUserDraft))
                }else{
                    await props.updatePostMutation(formatPostData(props.postData))
                }
            }}
        >
            <PopupHeader>
                Are you sure?
            </PopupHeader>

            <PopupBody>
                Note: This will overwrite your currently uploaded post 
            </PopupBody>

            <PopupFooter>
                <CancelButton
                >
                    Cancel
                </CancelButton>
                
                <AcceptButton
                    raised
                >
                    Yes
                </AcceptButton>
            </PopupFooter>
        </Popup>
    </PopupContainer>
)

UpdatePostPopup.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool.isRequired,
    updatePostMutation: PropTypes.func,
    getUserDraft: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    draftGet: PropTypes.bool.isRequired,
    postData: PropTypes.object,
}

const UpdatePostPopupWithMutation1 = (props) => (
    <UpdatePost>
        <UpdatePostPopup 
            postData={props.loadData}
            draftGet={props.draftGet}
            postId={props.postId}
            {...props}
        />
    </UpdatePost>
)

const UpdatePostPopupWithMutation2 = (props) => (
    <GetUserDraft>
        <UpdatePostPopupWithMutation1 
            {...props}
        />
    </GetUserDraft>
)

export default UpdatePostPopupWithMutation2