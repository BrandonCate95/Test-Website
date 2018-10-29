import React from 'react'
import PropTypes from 'prop-types'
import UserSignInBtnGrp from '../../../components/groups/UserSignInBtnGrp'
import NewPagePopup from './AddPostPageNewPagePopup'
import styled from 'styled-components'
import AddPostPageSaveDraftBtn from './AddPostPageSaveDraftBtn'
import GetPost from '../../../queries/components/GetPost'
import PostCRUDPopups from '../../../components/groups/PostCRUDPopups'
import NavBar, {StartSection, MiddleSection, EndSection} from '../../../components/mdc/NavBar'
import NavBarHomeLink from '../../../components/links/NavBarHomeLink'
import TitleScrollShow from '../../../components/misc/TitleScrollShow'

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 24px !important;
    padding-right: 12px !important;
    overflow: auto !important;
`

const StyledStartSection = styled(StartSection)`
    padding: 8px 0px !important;
    flex: 0 0 25% !important;
    .mdc-icon-button.material-icons{
        padding: 0px 0px !important;
    }
`

const StyledMiddleSection = styled(MiddleSection)`
    padding: 8px 0px !important;
    flex: 0 0 50% !important; justify-content: center;
`

const StyledEndSection = styled(EndSection)`
    padding: 8px 0px !important;
    flex: 0 0 25% !important;
`

const AddPostPageNavBar = (props) => (
    <NavBar
        fixed
        dense
    >
        <StyledStartSection>
            <StyledTitleContainer className="mdc-top-app-bar__title">
                <NavBarHomeLink 
                    className="mdc-typography--headline6"
                />
            </StyledTitleContainer>     

            <AddPostPageSaveDraftBtn 
                draftData={props.uploadData}
                setPostId={props.setPostId}
                updateDraftMutation={props.updateDraftMutation}
            />

            <NewPagePopup
                handleNewPage={props.handleNewPage}
            />      

            <GetPost
                postId={props.postId}
            >
                <PostCRUDPopups 
                    postId={props.postId}
                    loadData={props.uploadData}
                />
            </GetPost>
        </StyledStartSection>

        <StyledMiddleSection>
            <TitleScrollShow>
                <div className="mdc-typography--headline5">
                    {props.title}
                </div>
            </TitleScrollShow>
        </StyledMiddleSection>

        <StyledEndSection>
            <UserSignInBtnGrp />
        </StyledEndSection>
    </NavBar>
)

AddPostPageNavBar.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.string,
    uploadData: PropTypes.object.isRequired,
    setPostId: PropTypes.func.isRequired,
    handleNewPage: PropTypes.func.isRequired,
}

const AddPostPageNavBarWithQuery = (props) => (
    <GetPost
        postId={props.postId}
    >
        <AddPostPageNavBar {...props} />
    </GetPost>
)

export default AddPostPageNavBarWithQuery