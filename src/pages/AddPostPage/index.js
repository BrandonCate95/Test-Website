import React from 'react'
import NavMasterRow from './components/AddPostPageNavBar'
import TitleInput from './components/AddPostPageTitleInput'
import AuthorTag from '../../components/groups/AuthorTag'
import { connect } from 'react-redux'
import { updateAddPageCache } from '../../actions/actions'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GetUserByUsername from '../../queries/components/GetUserByUsername'
import GetUserDraft from '../../queries/components/GetUserDraft'
import Editor from './components/AddPostPageEditor'
import { graphql, compose } from 'react-apollo'
import createDraft from '../../mutations/compose/createDraft'
import updateDraft from '../../mutations/compose/updateDraft'
import uuidv4 from 'uuid/v4'

const ContentColumn = styled.div`
    display: flex;
    flex: 0 0 50%;
    flex-direction: column;
    max-width: 50%;
    width: 100%;
    position: relative;
    margin: 0 auto;
`

const initialState = {
    postId: '',
    title: '',
    username: 'anon',
    content: '',
    preview: false,
    titleCheck: false,
    titleCheckUserMatch: false,
    saveTimeout: null,
    editor: null
}

class AddPage extends React.Component {

    state = initialState

    handleSaveTimeout = () => {
        if(this.state.saveTimeout) clearTimeout(this.state.saveTimeout)
        this.setState({ saveTimeout: setTimeout(this.handleSave, 2500) })
    }

    handleSave = async () => {
        if(this.state.postId === '') await this.setState({ postId: uuidv4() })
        const newState = {
            postId: this.state.postId,
            title: this.state.title,
            username: this.state.username,
            content: this.state.content
        }
        this.props.updateAddPageCache(newState)
    }

    setPostId = (postId) => {
        this.setState({postId})
        this.handleSaveTimeout()
    }

    handleNewPage = () => {
        this.setState({ ...initialState })
        this.handleSaveTimeout()
    }

    handleTitleChange = ({target}) => {    
        this.setState({ [target.name]: target.value })
        this.handleSaveTimeout()
    }
    
    handleEditorModelChange = (content) => {
        this.setState({ content })
        this.handleSaveTimeout()
    }

    handleTitleFocus = () => {
        this.state.editor.toolbar.disable()
    }

    handleTitleBlur = () => {
        this.state.editor.toolbar.enable()
    }

    setEditor = (editor) => {
        this.setState({editor})
    }

    componentDidMount = async () => {
        console.log(this.props)
        if(this.props.location.state && this.props.location.state.postId !== this.props.addpage.postId){
            // let data = await this.props.getUserDraft(this.props.location.state.postId)
            // let newState = Object.assign({}, data.getUserDraft, {
            //     username: this.props.username,
            //     content: data.getUserDraft.content ? data.getUserDraft.content : '',
            //     preview: false,
            // })
            // this.setState(newState)
        }
        else if(this.props.addpage !== this.state){
            let newState = Object.assign({}, this.props.addpage, {
                username: this.props.username,
                preview: false,
            })
            this.setState(newState)
        }
    }

    render(){
        const { title, content, preview, titleCheck, titleCheckUserMatch, postId } = this.state
        return(
            <div id="addPageContainer">
                <NavMasterRow 
                    title={title}
                    postId={postId}
                    uploadData={this.state}
                    setPostId={this.setPostId.bind(this)}
                    handleNewPage={this.handleNewPage.bind(this)}
                />
                <div id="toolbarContainer">{/* editor tooldbar is initialized in this container */}</div>
                <ContentColumn>

                    <TitleInput
                        preview={preview}
                        title={title}
                        handleTitleChange={this.handleTitleChange.bind(this)}
                        titleCheck={titleCheck}
                        titleCheckUserMatch={titleCheckUserMatch}
                        handleTitleFocus={this.handleTitleFocus.bind(this)}
                        handleTitleBlur={this.handleTitleBlur.bind(this)}
                    />

                    <GetUserByUsername username={this.props.username}>
                        <AuthorTag
                            author={this.props.username}
                        />
                    </GetUserByUsername>

                    <Editor
                        model={content}
                        handleModelChange={this.handleEditorModelChange.bind(this)}
                        setEditor={this.setEditor.bind(this)}
                    />

                </ContentColumn>
            </div>
        )
    }
}

AddPage.propTypes = {
    //addpage: PropTypes.object.isRequired,
    updateAddPageCache: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

const withGraphQL = (props) => (
    <GetUserDraft>
        <AddPage {...props} />
    </GetUserDraft>
)

const mapStateToProps = (state) => ({
    addpage: state.addpage,
    username: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    updateAddPageCache: (payload) => {
        dispatch(updateAddPageCache(payload))
    }
})

export default compose(
    createDraft,
    updateDraft,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)
(withGraphQL)