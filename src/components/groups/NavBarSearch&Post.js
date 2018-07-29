import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../inputs/SearchBar'
import UserSignInBtnGrp from '../groups/UserSignInBtnGrp'
import AddPostPageLink from '../links/AddPostPageLink'
import styled from 'styled-components'
import NavBarContainer, {StartSection, MiddleSection, EndSection} from '../mdc/NavBar'
import Button from '../mdc/Button'
import NavBarHomeLink from '../links/NavBarHomeLink'
import TitleScrollShow from '../misc/TitleScrollShow'

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 12px !important;
    padding-right: 24px !important;
    overflow: auto !important;
`

const StyledSearchBarSearch = styled(SearchBar)`
    width: 60%;
    padding-left: 40px;
`

const StyledSearchBarPage = styled(SearchBar)`
    width: 50%;
`

const StyledStartSection = styled(StartSection)`
    padding: 8px 0px !important;
    ${props => props.navBarType === 'search' ?
        'width: 240px;'
    :
        ''
    }
    ${props => props.navBarType === 'post' ?
        'flex: 0 0 25% !important;'
    :
        ''
    }
`

const StyledMiddleSection = styled(MiddleSection)`
    padding: 8px 0px !important;
    ${props => props.navBarType === 'search' ?
        'flex: 0 0 calc(75% - 240px) !important;'
    :
        ''
    }
    ${props => props.navBarType === 'post' ?
        'flex: 0 0 50% !important; justify-content: center;'
    :
        ''
    }
`

const StyledEndSection = styled(EndSection)`
    padding: 8px 0px !important;
    flex: 0 0 25% !important;
`

const NavBar = ({navBarType, toggleSidebar, title}) => (
    <NavBarContainer
        fixed
    >
        <StyledStartSection navBarType={navBarType}>
            <Button
                icon
                onClick={toggleSidebar}
                style={{marginLeft: "12px", padding: "0"}}
            >
                menu
            </Button>
            <StyledTitleContainer className="mdc-top-app-bar__title">
                <NavBarHomeLink 
                    className="mdc-typography--headline6"
                />
            </StyledTitleContainer>
            {navBarType === 'post' &&
                <StyledSearchBarPage />
            }  
        </StyledStartSection>

        <StyledMiddleSection navBarType={navBarType}>
            {navBarType === 'search' &&
                <StyledSearchBarSearch />
            }
            {navBarType === 'post' &&                  
                <TitleScrollShow>
                    <div className="mdc-typography--headline5">
                        {title}
                    </div>
                </TitleScrollShow>
            }
        </StyledMiddleSection>

        <StyledEndSection>
            <AddPostPageLink />
            <UserSignInBtnGrp />
        </StyledEndSection>
    </NavBarContainer>
)

NavBar.propTypes = {
    toggleSidebar: PropTypes.func,
    navBarType: PropTypes.string,
    title: PropTypes.string,
}

export default NavBar