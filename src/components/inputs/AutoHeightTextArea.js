import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Textarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    margin: 0 5px 20px 5px;
    fontSize: 14px;
    color: #777;
    outline: none;
`

class AutoHeightTextArea extends React.Component {

    textArea = React.createRef()
    
    OnInput() {
        this.style.height = 'auto'
        this.style.height = (this.scrollHeight) + 'px'
    }

    componentDidMount = () => {
        const textarea = this.textArea.current
        textarea.style.height = textarea.scrollHeight
        textarea.style.overflowY = "hidden"
        textarea.addEventListener("input", this.OnInput, false)
    }   
    
    render(){
        const { id, name, className, value, handleTextAreaChange, placeholder, onFocus, onBlur } = this.props
        return(
            <Textarea
                id={ id }
                innerRef={ this.textArea }
                style={ style }
                className={ className ? className : '' }
                name={ name }
                value={ value }
                onChange={ handleTextAreaChange }
                placeholder={ placeholder }
                onFocus={ onFocus }
                onBlur={ onBlur }
            ></Textarea>
        )
    }
}

const style = {
    width: "100%",
    resize: "none",
    border: "none",
    margin: "0 5px 20px 5px",
    fontSize: "14px",
    color: "#777",
    outline: "none",
}

AutoHeightTextArea.defaultProps = {
    id: '',
    name: '',
    placeholder: '',
}

AutoHeightTextArea.propTypes = {
    id: PropTypes.string, 
    name: PropTypes.string, 
    className: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    handleTextAreaChange: PropTypes.func.isRequired, 
    placeholder: PropTypes.string, 
    onFocus: PropTypes.func, 
    onBlur: PropTypes.func,
}

export default AutoHeightTextArea