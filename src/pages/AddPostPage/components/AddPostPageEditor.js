import React from 'react'
import PropTypes from 'prop-types'
import 'froala-editor/js/froala_editor.pkgd.min.js'
import getS3ImageKeyFromUrl from '../../../utilities/getS3ImageKeyFromURL'
import Storage from '@aws-amplify/storage/lib'

import { connect } from 'react-redux'
import { generateS3Hash } from '../../../actions/actions'

import Loadable from 'react-loadable'
import Spinner from '../../../components/misc/Spinner'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner primary /></div>

const FroalaEditor = typeof window !== 'undefined' ? Loadable({
    loader: () => import('react-froala-wysiwyg'),
    loading: Loading,
}) : () => <div></div>

class Editor extends React.Component {

    config = {
        theme: 'custom',
        charCounterCount: false,
        imageUploadToS3: this.props.s3Hash,
        toolbarContainer: '#toolbarContainer',
        saveInterval: 2500,
        linkAlwaysBlank: true,
        fontFamilyDefaultSelection: 'Arial',
        fontFamilySelection: true,
        fontSizeDefaultSelection: '22',
        fontSizeSelection: true,
        quickInsertTags: [],
        toolbarButtons: ['bold', 'italic', 'underline', '|', 'fontFamily', 'fontSize', '|', 'align', 'formatUL', 'quote', '|', 'insertLink', 'insertImage', 'embedly', '|', 'insertHR', '|', 'undo', 'redo'],
        toolbarButtonsMD: ['bold', 'italic', 'underline', '|', 'fontFamily', 'fontSize', '|', 'insertLink', 'insertImage', 'embedly', '|', 'insertHR', '|', 'undo', 'redo'],
        toolbarButtonsSM: ['bold', 'italic', '|', 'fontFamily', 'fontSize', '|', 'insertImage', 'embedly', '|', 'undo', 'redo'],
        toolbarButtonsXS: ['bold', '|', 'fontSize', '|', 'insertImage', 'embedly', '|', 'undo', 'redo'],
        events : {
            'froalaEditor.initialized' : (e, editor) => {
                this.props.setEditor(editor)
            },
            'froalaEditor.image.removed' : function(e, editor, $img) {
                const key = getS3ImageKeyFromUrl($img[0].src).split('%2F')[2]
                Storage.remove(key, {level: 'protected'})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                return false
            }
        }
    }

    componentDidMount = async () => {
        this.props.generateS3Hash()
    }

    render () {
        if(Object.keys(this.props.s3Hash).length === 0 && this.props.s3Hash.constructor === Object) return null
        return (
            <FroalaEditor
                config={this.config}
                model={this.props.model}
                onModelChange={this.props.handleModelChange}
            />  
        )
    }
}

Editor.propTypes = {
    model: PropTypes.string.isRequired,
    handleModelChange: PropTypes.func.isRequired,
    s3Hash: PropTypes.object.isRequired,
    generateS3Hash: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    s3Hash: state.addpage.s3Hash
})

const mapDispatchToProps = (dispatch) => ({
    generateS3Hash: (payload) => {
        dispatch(generateS3Hash(payload))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)