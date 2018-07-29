import React from 'react'
import PropTypes from 'prop-types'
import DeleteDraft from '../../mutations/components/DeleteDraft'
import Button from '../mdc/Button'
import PopupContainer, { Popup, PopupHeader, PopupBody, PopupFooter, CancelButton, AcceptButton } from '../mdc/Popup'

const DeleteDraftPopup = (props) => (
    <PopupContainer>
        <Button
            title="delete draft"
            icon
            error
            loading={props.loading}
            disabled={props.disabled}
            popup-role="button"
        >
            delete_forever
        </Button>

        <Popup
            popup-role="popup"
            onAccept={async () => await props.deleteDraftMutation(props.postId)}
        >
            <PopupHeader>
                Are you sure?
            </PopupHeader>

            <PopupBody>
                This is permenanent!
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

DeleteDraftPopup.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool.isRequired,
    deleteDraftMutation: PropTypes.func,
    postId: PropTypes.string.isRequired,
}

const DeleteDraftPopupWithMutation = (props) => (
    <DeleteDraft>
        <DeleteDraftPopup {...props} />
    </DeleteDraft>
)

export default DeleteDraftPopupWithMutation