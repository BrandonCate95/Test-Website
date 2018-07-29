import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInputTitle = styled.input`
    width: 100%;
    z-index: 3;
    font-size: 48px;
    font-family: Futura, Trebuchet MS, Arial, sans-serif;
    outline: none;
    border: none;
    line-height: normal !important;
    margin-bottom: 20px;

    &:focus {
        outline: none;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ccc;
        opacity: 1; /* Firefox */
    }
    
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ccc;
    }
    
    &::-ms-input-placeholder { /* Microsoft Edge */
        color: #ccc;
    }

    &:disabled {
        color: #212529;
        background: none;
    }
`

const ErrorMessage = styled.div`
    height: 20px;
    padding-left: 40px;
    text-align: right;
`

const InUseMessage = styled(ErrorMessage)`
    opacity: 0.3;
`

const MainTitleInput = ({title, handleTitleChange, preview, titleCheck, titleCheckUserMatch, toggleToolbar}) => (
    <React.Fragment>
        <StyledInputTitle 
            id="main-title"
            className="mdc-typography--headline2"
            style={{ marginTop : preview ? '68px' : '147.2px' }}
            name="title"
            type="text"
            placeholder="Title here..."
            value={title}
            onChange={handleTitleChange}
            onFocus={toggleToolbar}
            onBlur={toggleToolbar}
            disabled={preview}
        />
        {titleCheck && !titleCheckUserMatch &&
            <ErrorMessage className="mdc-typography--caption mdc-theme-tertiary--dark-color">
                {!preview &&
                    '* title already in use *'
                }
            </ErrorMessage>
        }
        {titleCheck && titleCheckUserMatch &&
            <InUseMessage className="mdc-typography--caption">
                {!preview &&
                    '* title in use by you *'
                }
            </InUseMessage>
        }
    </React.Fragment>
)

MainTitleInput.propTypes = {
    title: PropTypes.string.isRequired, 
    handleTitleChange: PropTypes.func.isRequired, 
    preview: PropTypes.bool.isRequired, 
    titleCheck: PropTypes.bool.isRequired, 
    titleCheckUserMatch: PropTypes.bool.isRequired, 
    toggleToolbar: PropTypes.func.isRequired,
}

export default MainTitleInput