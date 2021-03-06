import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'froala-editor/js/froala_editor.pkgd.min.js'
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg'

const StyledUnderlay = styled.div`
    position: absolute;
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
`
const StyledOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
`

class EditorImg extends React.Component {

  state={
    config: {
      //eventually add back in img caption
      imageEditButtons: ['imageReplace', /* 'imageCaption', */ 'imageAlt', 'fullWidth', 'fullHeight'],
      imageResizeWithPercent: true,
    }
  } 

  handlePopupBtnToggle = async (e) => {
    const { default: $ } = await import(/* webpackChunkName: "jquery" */ 'jquery')
    if($(e.target).hasClass('img-width-100') !== $('#fullWidth-1').hasClass('img-popup-active')){
      $('#fullWidth-1').toggleClass('img-popup-active')
    }            
    if($(e.target).hasClass('img-height-100') !== $('#fullHeight-1').hasClass('img-popup-active')){
      $('#fullHeight-1').toggleClass('img-popup-active')
    } 
  }

  componentDidMount = async () => {
    const { default: $ } = await import(/* webpackChunkName: "jquery" */ 'jquery')
    $('#froalaImgEditor1').on('click', this.handlePopupBtnToggle)
    $('#froalaImgEditor1').on('error', this.props.handleImgError)
    $('#froalaImgEditor1').froalaEditor().on('froalaEditor.image.beforeUpload', this.props.handleImgUpload)
    $('#froalaImgEditor1').froalaEditor().on('froalaEditor.image.beforeRemove', this.props.handleDeleteImg)
  }

  componentWillUnmount = async () => {
    const { default: $ } = await import(/* webpackChunkName: "jquery" */ 'jquery')
    $('#froalaImgEditor1').off('click', this.handlePopupBtnToggle)
    $('#froalaImgEditor1').off('error', this.props.handleImgError)
    $('#froalaImgEditor1').froalaEditor().off('froalaEditor.image.beforeUpload', this.props.handleImgUpload)
    $('#froalaImgEditor1').froalaEditor().off('froalaEditor.image.beforeRemove', this.props.handleDeleteImg)
  }

  render () {
    const { model, handleModelChange, preview } = this.props
    return(
      <div className="img-container--16-9 padding-none" style={{position: "relative"}}>
        <StyledUnderlay>  
            <p>*Required*</p>
            <p>Image used for search result</p>
            <p>Best Aspect Ratio - 16 : 9</p>       
            <p>Click for image options</p>            
        </StyledUnderlay>

        <StyledOverlay
          className={preview ? '' : 'hidden'}
        >
        </StyledOverlay>

        <FroalaEditorImg
          config={this.state.config}
          model={{
            id: model.id,
            src: model.src,
            class: `pos-absolute ${model.class} ${model.src === '#' ? ' no-image-uploaded' : ''}`,
          }}
          onModelChange={handleModelChange}
        />      
      </div>
    );
  }
}

EditorImg.propTypes = {
  model: PropTypes.shape({
    src: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired 
  }),
  handleModelChange: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
  handleImgUpload: PropTypes.func.isRequired,
  handleImgError: PropTypes.func.isRequired,
  handleDeleteImg: PropTypes.func.isRequired,
}

export default EditorImg