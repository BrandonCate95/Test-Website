import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserPageEditSideBarContent from './UserEditPageSideBarContent'
import NavPageTemplate, { NavBarContainer, SideBarContainer, PageContentContainer } from '../../../components/groups/NavPageTemplate'
import NavBar from '../../../components/groups/NavBarSearch&Post'
import getKeyWithoutPrefix from '../../../utilities/getKeyWithoutPrefix'
import {Auth, Storage} from 'aws-amplify'
import awsmobile from '../../../aws-exports'

import Loadable from 'react-loadable'
import Spinner from '../../../components/misc/Spinner'

const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner large primary /></div>

const UserPageEditContent = typeof window !== 'undefined' ? Loadable({
    loader: () => import('./UserEditPageContent'),
    loading: Loading,
}) : <div></div>

class UserPageEdit extends React.Component {

    state = {
        mainImgModel: {
            id: 'froalaMainImgEditor',
            src: '#',
            class: 'fr-view fr-fil fr-dib pos-absolute',
        },
        logoImgModel: {
            id: 'froalaLogoImgEditor',
            src: '#',
            class: 'fr-view fr-fil fr-dib',
        },
        description: this.props.data.description || '',
    }

    handleMainImgModelChange = (mainImgModel) => {
        this.setState({mainImgModel})
    }

    handleLogoImgModelChange = (logoImgModel) => {
        this.setState({logoImgModel})
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value
        });
    }
    
    formatImgFile = async (id, visibility, file) => {
        const { name: fileName, type: mimeType } = file
        const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(fileName)
        const { identityId } = await Auth.currentCredentials()
        const bucket = awsmobile.aws_user_files_s3_bucket
        const region = awsmobile.aws_user_files_s3_bucket_region
  
        const key = `${visibility}/${identityId}/${id}${extension && '.'}${extension}`
  
        return {
            s3Key: `${id}${extension && '.'}${extension}`,
            file: {
                bucket,
                key,
                region,
                mimeType,
                localUri: file,
            }
        }
    }

    componentWillMount = async () => {
        const pageSrc = await Storage.get(getKeyWithoutPrefix(this.props.data.pageImg.file.key), { level: 'protected' }).then((result) => result).catch((err) => '#')
        const logoSrc = await Storage.get(getKeyWithoutPrefix(this.props.data.logoImg.file.key), { level: 'protected' }).then((result) => result).catch((err) => '#')
        const mainImgModel = Object.assign({},this.state.mainImgModel,{src:pageSrc})
        const logoImgModel = Object.assign({},this.state.logoImgModel,{src:logoSrc})
        const description = this.props.data.description
        this.setState({mainImgModel, logoImgModel, description})
    }

    render(){
        const { mainImgModel, logoImgModel, description } = this.state
        const { username, user, data } = this.props
        return(
            <NavPageTemplate 
                navBarType="search"
                sideBarInitialOpen={user === username}
            >
                <NavBarContainer
                    navpage-role="navbar"
                >
                    <NavBar />
                </NavBarContainer>
        
                <SideBarContainer
                    navpage-role="sidebar"
                >
                    <UserPageEditSideBarContent 
                        userMatch={user === username} 
                        user={user} 
                        userInput={this.state}
                    />
                </SideBarContainer>
        
                <PageContentContainer
                    navpage-role="page-content"
                >
                    <UserPageEditContent
                        userMatch={user === username}
                        username={user} 
                        mainImgModel={mainImgModel} 
                        logoImgModel={logoImgModel}
                        description={description} 
                        handleMainImgModelChange={this.handleMainImgModelChange.bind(this)}
                        handleLogoImgModelChange={this.handleLogoImgModelChange.bind(this)}
                        handleInputChange={this.handleInputChange.bind(this)}
                        formatImgFile={this.formatImgFile.bind(this)}
                        userData={data}
                    />
                </PageContentContainer>
            </NavPageTemplate>
        )
    }
}

UserPageEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string.isRequired,
        })
    }),
    username: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,   
    }
}
   
export default connect(
    mapStateToProps,
    null,
)(UserPageEdit)