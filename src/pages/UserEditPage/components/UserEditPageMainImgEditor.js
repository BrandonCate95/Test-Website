import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg'
import { Storage } from 'aws-amplify'
import $ from 'jquery'
import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'

const StyledOverlay = styled.div`
    pointer-events: none;
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    color: #aaa;
    z-index: 10;
`

const StyledImgEditorContainer = styled.div`
    padding: 0;
    width: 100%;
    img.fr-view.fr-dib{
      margin: 0 auto;
    }
`

// Render Froala Editor component.
class UserPageMainImgEditor extends React.Component {

  state={
    config: {
      //eventually add back in img caption
      imageEditButtons: ['imageReplace', 'imageAlt'],
      imageCORSProxy: 'https://cors-anywhere.herokuapp.com',
      imageResize: false,
    }
  } 

  handleUpdateImg = async (e, editor, files) => {
    if (files.length) {
      const id = 'pageImg'
      const visibility = 'protected'
      const data = await this.props.formatImgFile(id, visibility, files[0])

      await this.props.updateUserImgMutation(data.s3Key.split('.')[0], data.file)
      Storage.get(data.s3Key , { level: visibility })
        .then(result => editor.image.insert(result, null, null, editor.image.get()) )
        .catch(err => console.log(err))
    }
  
    editor.popups.hideAll()
    return false  
  }

  componentDidMount = () => {
    $('#froalaMainImgEditor').froalaEditor().on('froalaEditor.image.beforeUpload', this.handleUpdateImg) 
  }

  componentWillUnmount = () => {
    $('#froalaMainImgEditor').froalaEditor().off('froalaEditor.image.beforeUpload', this.handleUpdateImg)
  }

  render () {
    const { config } = this.state
    const { model, handleModelChange } = this.props
    return(
      <StyledImgEditorContainer className="col-12">
        <StyledOverlay style={{position: "absolute"}}>
          Click To Edit
        </StyledOverlay>
        <FroalaEditorImg
          config={config}
          model={model}
          onModelChange={handleModelChange}
          onLoad={e => console.log(e)}
        />
      </StyledImgEditorContainer>
    )
  }
}

UserPageMainImgEditor.propTypes = {
  model: PropTypes.shape({
    src: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired 
  }),
  handleModelChange: PropTypes.func.isRequired,
  updateUserImgMutation: PropTypes.func,
  formatImgFile: PropTypes.func.isRequired,
}

export default UserPageMainImgEditor