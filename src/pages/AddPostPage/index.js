import React from 'react'
import NavMasterRow from './components/AddPostPageNavBar'
import Editor from './components/AddPostPageEditor'
import TitleInput from './components/AddPostPageTitleInput'
import EditorImg from './components/AddPostPageImgEditor'
import AuthorTag from '../../components/groups/AuthorTag'
import NotesSection from './components/AddPostPageNotesSection'
import { connect } from 'react-redux'
import { updateAddPageCache } from '../../actions/actions'
import PropTypes from 'prop-types'
import $ from 'jquery'
import styled from 'styled-components'
import awsmobile from '../../aws-exports'
import { Auth, Storage } from 'aws-amplify'
import GetUserByUsername from '../../queries/components/GetUserByUsername'
import CreateImg from '../../mutations/components/CreateImg'
import UpdateImg from '../../mutations/components/UpdateImg'
import DeleteImg from '../../mutations/components/DeleteImg'
import GetUserDraft from '../../queries/components/GetUserDraft'
import uuidv4 from 'uuid/v4'
import getS3ImageKeyFromURL from '../../utilities/getS3ImageKeyFromURL'

const ContentColumn = styled.div`
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    max-width: 50%;
    width: 100%;
    position: relative;
    margin: 0 auto;
`

const s3hostPrefix = 'https://webapp'

///// SHOULD CONSIDER IMPLEMENTING THIS WITH REDUX B/C COMPLICATED STATE

class AddPage extends React.Component {

    state = {
        postId: '',
        title: '',
        showTitle: false,
        username: 'Nameless',
        content: '',
        imgId: 'froalaImgEditor1',
        imgKey: '#',
        imgClass: 'fr-view fr-fil fr-dib',
        notes: '',

        preview: false,
        saveLoading: false,
        titleCheck: false,
        titleCheckUserMatch: false,
    }

    handleNewPage = async () => {
        await this.setState({
            postId: '',
            title: '',
            showTitle: false,
            username: this.props.username || 'Nameless',
            content: '',
            imgId: 'froalaImgEditor1',
            imgKey: '#',
            imgClass: 'fr-view fr-fil fr-dib',
            notes: '',
            preview: false,
        })
        this.props.updateAddPageCache(this.state)
    }

    handleInputChange = async (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        await this.setState({
          [name]: value
        });
        this.props.updateAddPageCache(this.state)
    } 

    handleTitleChange = async (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        await this.setState({
          [name]: value
        })

        // const res = await this.props.getPostByTitle(value)

        // await this.setState({
        //     titleCheck: res.length > 0,
        //     titleCheckUserMatch: false, //res[0] ? res[0].userID === userID : false,
        //     postId: res[0] ? res[0].postId : '',
        // })
        this.props.updateAddPageCache(this.state)
    }
    
    handleEditorModelChange = async (content) => {
        await this.setState({ content });
        this.props.updateAddPageCache(this.state)
    }

    handleImgModelChange = async (imgModel) => {
        await this.setState({
            imgKey: imgModel.src,
            imgClass: imgModel.class, 
        });
        this.props.updateAddPageCache(this.state)
    }

    handleImgDownload = async (imgKey) => {
        if(!imgKey.startsWith(s3hostPrefix)){
            const url = await Storage.get(imgKey, { level: 'protected' })
                .then(result => result)
                .catch(error => error)
            return url
        }else{
            return imgKey
        }
    }

    componentDidMount = async () => {
        window.addEventListener('click', this.toggleToolbar)

        if(this.props.location.state && this.props.location.state.postId !== this.props.addpage.postId){
            const data = await this.props.getUserDraft(this.props.location.state.postId)

            let newState = Object.assign({}, data.getUserDraft, {
                username: this.props.username,
                content: data.getUserDraft.content ? data.getUserDraft.content : '',
                imgClass: data.getUserDraft.imgClass ? data.getUserDraft.imgClass : '',
                imgKey: data.getUserDraft.imgKey ? await this.handleImgDownload(data.getUserDraft.imgKey) : '#',
                preview: false,
                saveLoading: false,
            })

            await this.setState(newState)
        }
        else if(this.props.addpage !== this.state){
            let newState = Object.assign({}, this.props.addpage, {
                username: this.props.username,
                imgKey: this.props.addpage.imgKey ? await this.handleImgDownload(this.props.addpage.imgKey) : '#',
                preview: false,
                saveLoading: false,
            })
            await this.setState(newState)
        }

    }
    
    componentWillUnmount = () => {
        window.removeEventListener('click', this.toggleToolbar)
    }

    toggleToolbar = (e) => {
        if(['main-title', 'froalaImgEditor1', 'notes-textarea'].indexOf(e.target.id) <= -1){
            $('.fr-box').froalaEditor('toolbar.enable')
        }else{
            $('.fr-box').froalaEditor('toolbar.disable')
        }
    }

    togglePreview = (e) => {
        document.getElementsByClassName('fr-toolbar')[0].classList.toggle("hidden");
        e.target.classList.toggle('toolbar-hidden-btn')

        $('.fr-image-resizer').toggleClass( 'hidden' )
        $('.fr-popup').toggleClass( 'hidden' )
        if( $('.fr-element.fr-view').attr('contenteditable') === 'true'){//value is string 'true' or 'false'
            $('.fr-box').froalaEditor('edit.off');
        }else{
            $('.fr-box').froalaEditor('edit.on');
        }

        this.setState({
            preview: this.state.preview ? false : true
        })
    }

    setPostId = async (postId) => {
        await this.setState({postId})
        this.props.updateAddPageCache(this.state)
    }

    formatImgFile = async (id, visibility, file) => {
        const { name: fileName, type: mimeType } = file
        const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(fileName)
        const { identityId } = await Auth.currentCredentials()
        const bucket = awsmobile.aws_user_files_s3_bucket
        const region = awsmobile.aws_user_files_s3_bucket_region

        const key = `${visibility}/${identityId}/imgs/${id}${extension && '.'}${extension}`

        return {
            s3Key: `imgs/${id}${extension && '.'}${extension}`,
            file: {
                bucket,
                key,
                region,
                mimeType,
                localUri: file,
            }
          }
    }

    handleCreateImg = async (e, editor, files) => {
        return new Promise(async (resolve, reject) => {
            const id = uuidv4()
            const visibility = 'protected'
            const data = await this.formatImgFile(id, visibility, files[0])
    
            await this.props.createImgMutation(id, visibility, data.file)
            Storage.get(data.s3Key, { level: visibility })
                .then(result => {
                    editor.image.insert(result, null, null, editor.image.get());
                    editor.popups.hideAll()      
                    // Stop default upload chain.
                    resolve(false);
                })
                .catch(err => reject(err))
        })
    }

    handleUpdateImg = async (e, editor, files) => {
        return new Promise(async (resolve, reject) => {
            const id = getS3ImageKeyFromURL(editor.image.get()[0].src)
            const visibility = 'protected'
            const data = await this.formatImgFile(id, visibility, files[0])
    
            await this.props.updateImgMutation(id.split('.')[0], visibility, data.file)
            Storage.get(data.s3Key, { level: visibility })
                .then(result => {
                    editor.image.insert(result, null, null, editor.image.get());
                    editor.popups.hideAll()      
                    // Stop default upload chain.
                    resolve(false);
                })
              .catch(err => reject(err))
        })
    }

    handleImgUpload = async (e, editor, files) => {
        if (files.length) {
            if(editor.image.get() && editor.image.get()[0].src.startsWith('https://webapp-userfiles')){
                await this.handleUpdateImg(e, editor, files)
            }else{
                await this.handleCreateImg(e, editor, files)
            }
        }     
    }

    handleDeleteImg = (e, editor, $img) => {
        return new Promise(async (resolve, reject) => {
            const key = getS3ImageKeyFromURL($img[0].src)
            this.props.deleteImgMutation(key)
                .then(() => resolve(true))
                .catch((error) => reject(error))
        })
    }

    handleImgError = (e) => {
        if(e.target.src.startsWith(s3hostPrefix)){
            const node = e.target
            try{
                const key = getS3ImageKeyFromURL(node.src)
                Storage.get(`imgs/${key}`, { level: 'protected' })
                    .then(async result => await fetch(result))
                    .then(result => {
                        if(result.statusText === 'OK'){
                            e.target.src = result.url
                        }else{
                            e.target.src = '#'
                        }
                    })
                    .catch(err => console.log(err))
            }catch(e){
                e.target.src = '#'
            }
        }
    }

    render(){
        const { title, content, imgId, imgKey, imgClass, notes, preview, titleCheck, titleCheckUserMatch, postId } = this.state
        const { username } = this.props
        return(
            <div id="addPageContainer">
                <NavMasterRow 
                    title={title}
                    postId={postId}
                    uploadData={this.state}
                    setPostId={this.setPostId.bind(this)}
                    handleNewPage={this.handleNewPage.bind(this)}
                    togglePreview={this.togglePreview.bind(this)}
                />
                <ContentColumn>

                    <TitleInput
                        preview={preview}
                        title={title}
                        handleTitleChange={this.handleTitleChange.bind(this)}
                        titleCheck={titleCheck}
                        titleCheckUserMatch={titleCheckUserMatch}
                        toggleToolbar={this.toggleToolbar.bind(this)}
                    />

                    <GetUserByUsername username={username}>
                        <AuthorTag
                            author={username}
                        />
                    </GetUserByUsername>

                    <EditorImg
                        handleDeleteImg={this.handleDeleteImg.bind(this)}
                        handleImgError={this.handleImgError.bind(this)}
                        handleImgUpload={this.handleImgUpload.bind(this)}
                        model={{
                            id: imgId,
                            src: imgKey,
                            class: imgClass,
                        }}
                        handleModelChange={this.handleImgModelChange.bind(this)}
                        preview={preview}
                        toggleToolbar={this.toggleToolbar.bind(this)}
                    />

                    <Editor
                        handleImgUpload={this.handleImgUpload.bind(this)}
                        handleDeleteImg={this.handleDeleteImg.bind(this)}
                        handleImgError={this.handleImgError.bind(this)}
                        model={content}
                        handleModelChange={this.handleEditorModelChange.bind(this)}
                        toggleToolbar={this.toggleToolbar.bind(this)}
                    />

                    <NotesSection
                        notes={notes}
                        preview={preview}
                        handleInputChange={this.handleInputChange.bind(this)}
                        toggleToolbar={this.toggleToolbar.bind(this)}
                    />

                </ContentColumn>
            </div>
        )
    }
}

AddPage.propTypes = {
    //addpage: PropTypes.object.isRequired,
    updateAddPageCache: PropTypes.func.isRequired,
}

const AddPageContainer1 = (props) => (
    <CreateImg>
        <AddPage {...props} />
    </CreateImg>
)

const AddPageContainer2 = (props) => (
    <UpdateImg>
        <AddPageContainer1 {...props} />
    </UpdateImg>
)

const AddPageContainer3 = (props) => (
    <DeleteImg>
        <AddPageContainer2 {...props} />
    </DeleteImg>
)

const AddPageContainer4 = (props) => (
    <GetUserDraft>
        <AddPageContainer3 {...props} />
    </GetUserDraft>
)

const mapStateToProps = (state) => {
    return {
        addpage: state.addpage,
        username: state.user.username,
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateAddPageCache: (payload) => {
        dispatch(updateAddPageCache(payload))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPageContainer4)