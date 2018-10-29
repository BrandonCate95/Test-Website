import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AutoHeightTextArea from '../../../components/inputs/AutoHeightTextArea'

const StyledDiv = styled.div`
    display: flex;
    border-top: 1px dashed #aaa;
    font-size: 14px
`

const StyledHeader = styled.h6`
    display: inline-block;
    margin-top: 10px;
    color: #bbb;
`

const StyledNotice = styled.p`
    display: inline-block;
    font-size: 12px;
    color: #ccc;
    margin-left: auto;
`

const NotesSection = ({preview, notes, handleInputChange}) => (
    <React.Fragment>
    {!preview &&
        <React.Fragment>
            <StyledDiv>
                <StyledHeader className="mdc-typography--subtitle2">
                    Additional Notes
                </StyledHeader>
                <StyledNotice>
                    *Anything below dotted line will not be uploaded*
                </StyledNotice>
            </StyledDiv>
            <AutoHeightTextArea
                id="notes-textarea"
                name="notes"
                value={notes}
                handleTextAreaChange={handleInputChange}
                placeholder="..."
            />
        </React.Fragment>
    }
    </React.Fragment>
)

NotesSection.propTypes = {
    preview: PropTypes.bool.isRequired,
    notes: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}

export default NotesSection