import React from 'react'
import PropTypes from 'prop-types'
import CreatePost from '../../mutations/components/CreatePost'
import formatPostData from '../../utilities/formatPostData'
import GetUserDraft from '../../queries/components/GetUserDraft'
import Button from '../mdc/Button'
import PopupContainer, { Popup, PopupHeader, PopupBody, PopupFooter, CancelButton, AcceptButton } from '../mdc/Popup'

const UploadPostPopup = (props) => (
    <PopupContainer>
        <Button
            title="upload post"
            icon
            loading={props.loading}
            disabled={props.disabled}
            primary
            popup-role="button"
        >
            get_app
        </Button>

        <Popup
            popup-role="popup"
            onAccept={async () => {
                if(props.draftGet){
                    const data = await props.getUserDraft(props.postId)
                    await props.createPostMutation(formatPostData(data.getUserDraft))
                }else{
                    await props.createPostMutation(formatPostData(props.postData))
                }
            }}
        >
            <PopupHeader>
                Are you sure?
            </PopupHeader>

            <PopupBody>
                Note: After uploading you will no longer be able to update the title without creating an entirely new post
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

UploadPostPopup.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool.isRequired,
    createPostMutation: PropTypes.func,
    getUserDraft: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    draftGet: PropTypes.bool.isRequired,
    postData: PropTypes.object,
}

const UploadPostPopupWithMutation1 = (props) => (
    <CreatePost>
        <UploadPostPopup 
            postData={props.loadData}
            draftGet={props.draftGet}
            postId={props.postId}
            {...props}
        />
    </CreatePost>
)

const UploadPostPopupWithMutation2 = (props) => (
    <GetUserDraft>
        <UploadPostPopupWithMutation1 
            {...props}
        />
    </GetUserDraft>
)

export default UploadPostPopupWithMutation2