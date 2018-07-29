import React from 'react'
import PropTypes from 'prop-types'
import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import '../stylesheets/custom-theme.css'
import '../stylesheets/AddPostPageEditor.css'
import $ from 'jquery'
import FroalaEditor from 'react-froala-wysiwyg'

class Editor extends React.Component {

    constructor(props) {
        super(props);
        
        this.config = {
            theme: 'custom',
            keepFormatOnDelete: true,
            autofocus: true,
            charCounterCount: false,
            spellcheck: true,
            toolbarSticky: true,
            toolbarStickyOffset: "48px",
            //htmlAllowedAttrs: ['title', 'href', 'alt', 'src', 'style']
            htmlExecuteScripts: false,
            htmlRemoveTags: ['script'],
            imageMove: true,
            linkAlwaysBlank: true,
            fontFamilyDefaultSelection: 'Arial',
            fontFamilySelection: true,
            fontSizeDefaultSelection: '22',
            fontSizeSelection: true,
            imageDefaultWidth: "auto",
            saveInterval: 3000,
            toolbarButtons: [ '|', 'bold', 'italic', 'underline', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', '|',
                'align', 'formatOL', 'formatUL', 'quote', '|',
                'insertLink', 'insertImage', 'embedly', 'insertTable', '|',
                'emoticons', 'specialCharacters', 'insertHR', '|',
                'help', '|',
                'undo', 'redo', '|'],
            tabSpaces: 4,
            placeholderText: '<p>Content here...</p>',
            colorsStep: 9,
            colorsHEXInput: false,
            colorsText: [
                '#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC',
                '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000',
                '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF',
                '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#494949', 'REMOVE'
            ],
            colorsBackground: [
                '#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC',
                '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000',
                '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF',
                '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#494949', 'REMOVE'
            ],
            htmlAllowedEmptyTags: ['h1'],
            quickInsertTags: [],
            imageEditButtons: ['imageReplace', /* 'imageCaption', */ 'imageAlt', 'fullWidth', 'imageRemove'],
        }
    }

    handlePopupBtnToggle = (e) => {
        if($(e.target).hasClass('img-width-100') !== $('#fullWidth-2').hasClass('img-popup-active')){
            $('#fullWidth-2').toggleClass('img-popup-active')
        }
    }

    componentDidMount = () => {
        $('#addpage-editor-container').on('click', this.props.toggleToolbar)
        $('img.fr-fic.fr-dib.fr-draggable').on('click', this.handlePopupBtnToggle)
        $('.fr-box').froalaEditor().on('froalaEditor.image.beforeUpload', this.props.handleImgUpload)
        $('.fr-box').froalaEditor().on('froalaEditor.image.beforeRemove', this.props.handleDeleteImg)
    }

    componentWillUnmount = () => {
        $('#addpage-editor-container').off('click', this.props.toggleToolbar)
        $('img.fr-fic.fr-dib.fr-draggable').off('click', this.handlePopupBtnToggle)
        $('.fr-box').froalaEditor().off('froalaEditor.image.beforeUpload', this.props.handleImgUpload)
        $('.fr-box').froalaEditor().off('froalaEditor.image.beforeRemove', this.props.handleDeleteImg)
        $('img').off('error', this.props.handleImgError)
    }  

    //HOLY SHIT THIS IS AWFUL BUT ONLY WAY IT WORKS PLEASE CHANGE WHEN YOU CAN!!!!
    //////////////////////////////////////////////////////////////////////////////
    //SO FUCKING BAD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    
    imgsLength = {}
    componentDidUpdate = () => {
        if($('img').length !== this.imgsLength){
            $('img').off('error')
            $('img').on('error', this.props.handleImgError )
            this.imgsLength = $('img').length
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    render () {
        const { model, handleModelChange } = this.props
        return (
            <FroalaEditor
                config={this.config}
                model={model}
                onModelChange={handleModelChange}
            />     
        )
    }
}

Editor.propTypes = {
    model: PropTypes.string.isRequired,
    handleModelChange: PropTypes.func.isRequired,
    handleImgUpload: PropTypes.func.isRequired,
    toggleToolbar: PropTypes.func.isRequired,
}

export default Editor