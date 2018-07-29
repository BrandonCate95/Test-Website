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
    position: absolute;
    height: 100px;
    width: 100px;
    text-align: center;
    display: flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    color: #aaa;
    z-index: 3;
`

const StyledImgEditorContainer = styled.div`
    height: 100px;
    width: 100px;
    padding: 0;
    img.fr-view.fr-dib{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 50%;
    }
`

class UserPageLogoImgEditor extends React.Component {

  state={
    config: {
      //eventually add back in img caption
      imageEditButtons: ['imageReplace', 'imageAlt'],
      imageResize: false,
    }
  } 

  handleUpdateImg = async (e, editor, files) => {
    if (files.length) {
      const id = 'logoImg'
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
    $('#froalaLogoImgEditor').froalaEditor().on('froalaEditor.image.beforeUpload', this.handleUpdateImg)
  }

  componentWillUnmount = () => {
    $('#froalaLogoImgEditor').froalaEditor().off('froalaEditor.image.beforeUpload', this.handleUpdateImg)
  }

  render () {
    const { config } = this.state
    const { model, handleModelChange } = this.props
    return(
      <StyledImgEditorContainer>
        <StyledOverlay>
          Click To Edit
        </StyledOverlay>
        <FroalaEditorImg
          config={config}
          model={model}
          onModelChange={handleModelChange}
        />
      </StyledImgEditorContainer>
    );
  }
}

UserPageLogoImgEditor.propTypes = {
  model: PropTypes.shape({
    src: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired 
  }),
  handleModelChange: PropTypes.func.isRequired,
  formatImgFile: PropTypes.func.isRequired,
  updateUserImgMutation: PropTypes.func,
}

export default UserPageLogoImgEditor