import React from 'react'
import PropTypes from 'prop-types'
import SearchPageResults from './components/SearchPageResults'
import SearchPageSideBarContent from './components/SearchPageSideBarContent'
import NavPageTemplate, { NavBarContainer, SideBarContainer, PageContentContainer } from '../../components/groups/NavPageTemplate'
import NavBar from '../../components/groups/NavBarSearch&Post'
import SearchContent from '../../queries/components/SearchContent'

const SearchPage = ({location}) => (
    <NavPageTemplate 
        navBarType="search"
        sideBarInitialOpen={true}
    >
        <NavBarContainer
            navpage-role="navbar"
        >
            <NavBar />
        </NavBarContainer>

        <SideBarContainer
            navpage-role="sidebar"
        >
            <SearchPageSideBarContent search={location.search}/>
        </SideBarContainer>

        <PageContentContainer
            navpage-role="page-content"
        >
            <SearchContent search={location.search.replace('?q=','')}>
                <SearchPageResults />
            </SearchContent>
        </PageContentContainer>
    </NavPageTemplate>
)

SearchPage.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string.isRequired,
    })
}

export default SearchPage;