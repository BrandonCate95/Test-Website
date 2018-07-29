import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/mdc/Button'
import PopupContainer, { Popup, PopupHeader, PopupBody, PopupFooter, CancelButton, AcceptButton } from '../../../components/mdc/Popup'

const NewPagePopup = (props) => (
    <PopupContainer>
        <Button
            title="new page"
            icon
            popup-role="button"
        >
            file_copy
        </Button>
        <Popup
            popup-role="popup"
            onAccept={() => {
                props.handleNewPage()
            }}
        >
            <PopupHeader>
                Are you sure?
            </PopupHeader>

            <PopupBody>
                Note: Make sure you save your draft first 
            </PopupBody>

            <PopupFooter>
                <CancelButton>
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

NewPagePopup.propTypes = {
    handleNewPage: PropTypes.func.isRequired,
}

export default NewPagePopup