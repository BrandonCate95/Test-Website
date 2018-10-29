import React from 'react'
import 'froala-editor/js/froala_editor.pkgd.min.js'
import Storage from '@aws-amplify/storage/lib'
import getS3ImageKeyFromUrl from '../../utilities/getS3ImageKeyFromURL'

import Loadable from 'react-loadable'
import Spinner from '../../components/misc/Spinner'

import {Auth} from 'aws-amplify'

import { graphql, compose } from 'react-apollo'
import CREATE_DRAFT from '../../mutations/mutation/CREATE_DRAFT'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner primary /></div>

const FroalaEditor = typeof window !== 'undefined' ? Loadable({
    loader: () => import('react-froala-wysiwyg'),
    loading: Loading,
}) : () => <div></div>

class AboutPage extends React.Component{

    state = {
        model: '',
        fetched: false
    }

    config = {
        charCounterCount: false,
        imageUploadToS3: null,
        toolbarContainer: '#toolbarContainer',
        saveInterval: 2500,
        events : {
            'froalaEditor.image.removed' : function(e, editor, $img) {
                const key = getS3ImageKeyFromUrl($img[0].src).split('%2F')[2]
                Storage.remove(key, {level: 'protected'})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                return false
            },
            'froalaEditor.blur' : function (e, editor) {
                editor.toolbar.disable()
            },
            'froalaEditor.focus' : function (e, editor) {
                editor.toolbar.enable()
            },
            'froalaEditor.save.before' : function (e, editor, html) {
               console.log(html)
               return false
            },
        }
    }

    handleModelSave = (model) => {
        // save code
    }

    handleModelChange = (model) => {
        this.setState({
            model: model
        })
    }

    componentDidMount = async () => {
        console.log(this.props)
        const res = await fetch("/api/get_signature", {
            method: 'POST',
            body: JSON.stringify({
                IdentityId: (await Auth.currentCredentials()).params.IdentityId,
            }),
            headers: {"Content-Type": "application/json"}
        })
        this.config.imageUploadToS3 = await res.json()
        console.log(this.config.imageUploadToS3)
        this.setState({fetched:true})
    }

    render(){
        if(!this.state.fetched) return null
        return(
            <React.Fragment>
                <header>this is a test header</header>
                <div id="toolbarContainer"></div>                
                <input type="text" name="title" />
                <FroalaEditor 
                    config={this.config}
                    model={this.state.model}
                    onModelChange={this.handleModelChange}
                />
            </React.Fragment>
        )
    }
}

export default compose(
    graphql(CREATE_DRAFT, {
        props: (props) => ({
            createDraft: (draftData) => props.mutate({
                variables: { draftData }
            })
        })
    })
)(AboutPage)