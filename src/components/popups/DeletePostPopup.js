import React from 'react'
import PropTypes from 'prop-types'
import DeletePost from '../../mutations/components/DeletePost'
import Button from '../mdc/Button'
import PopupContainer, { Popup, PopupHeader, PopupBody, PopupFooter, CancelButton, AcceptButton } from '../mdc/Popup'

const DeletePostPopup = (props) => (
    <PopupContainer>
        <Button
            title="delete post"
            icon
            error
            loading={props.loading}
            disabled={props.disabled}
            popup-role="button"
        >
            remove_circle_outline
        </Button>

        <Popup
            popup-role="popup"
            onAccept={async () => await props.deletePostMutation(props.postId)}
        >
            <PopupHeader>
                Are you sure?
            </PopupHeader>

            <PopupBody>
                Note: Your draft version will still be available if you remove the uploaded post 
            </PopupBody>

            <PopupFooter>
                <CancelButton
                    error
                >
                    Cancel
                </CancelButton>
                
                <AcceptButton
                    raised
                    error
                >
                    Yes
                </AcceptButton>
            </PopupFooter>
        </Popup>
    </PopupContainer>
)

DeletePostPopup.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool.isRequired,
    deletePostMutation: PropTypes.func,
    postId: PropTypes.string.isRequired,
}

const DeletePostPopupWithMutation = (props) => (
    <DeletePost>
        <DeletePostPopup {...props} />
    </DeletePost>
)

export default DeletePostPopupWithMutation