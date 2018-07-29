import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserPageContent from './components/UserPageContent'
import UserPageSideBarContent from './components/UserPageSideBarContent'
import NavPageTemplate, { NavBarContainer, SideBarContainer, PageContentContainer } from '../../components/groups/NavPageTemplate'
import NavBar from '../../components/groups/NavBarSearch&Post'
import GetUserByUsername from '../../queries/components/GetUserByUsername'

const UserPage = ({match, username}) => (
    <NavPageTemplate 
        navBarType="search"
        sideBarInitialOpen={match.params.user === username}
    >
        <NavBarContainer
            navpage-role="navbar"
        >
            <NavBar />
        </NavBarContainer>

        <SideBarContainer
            navpage-role="sidebar"
        >
            <UserPageSideBarContent 
                userMatch={match.params.user === username} 
                user={match.params.user} 
            />
        </SideBarContainer>

        <PageContentContainer
            navpage-role="page-content"
        >
            <GetUserByUsername username={match.params.user}>
                <UserPageContent 
                    userMatch={match.params.user === username} 
                    username={match.params.user} 
                />
            </GetUserByUsername>
        </PageContentContainer>
    </NavPageTemplate>
)

UserPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string.isRequired,
        })
    }),
    username: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,   
    }
}
   
export default connect(
    mapStateToProps,
    null,
)(UserPage)