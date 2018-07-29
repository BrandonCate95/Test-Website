import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LogoutBtn from '../Buttons/LogoutBtn'
import Button from '../mdc/Button'
import MenuContainer, { Menu } from '../mdc/Menu'

const StyledIcon = styled.i`
    font-size: 36px !important;
    margin: 0 14px 0 0 !important;
    height: auto !important;
    pointer-events: none;
`

const StyledToggleIcon = styled.i`
    font-size: 28px !important;
    margin: 0 !important;
    height: auto !important;
    pointer-events: none;
`

const StyledButton = styled(Button)`
    button{
        padding: 0 !important;
        &::before, &::after{
            background-color: transparent !important;
        }
    }
`

const UserProfileMenu = (props) => (
    <MenuContainer
        closeMenu={(evt) => {
            const btn = evt.target.parentNode.children[0].children[0]
            btn.setAttribute("aria-pressed", "false")
            btn.children[1].innerHTML = 'arrow_drop_down'
        }}
        openMenu={(evt) => {
            if(evt.target.getAttribute("aria-pressed") === "false"){
                evt.target.setAttribute("aria-pressed", "true")
                evt.target.children[1].innerHTML = 'arrow_drop_up'
            }else{
                evt.target.setAttribute("aria-pressed", "false")
                evt.target.children[1].innerHTML = 'arrow_drop_down'
            }
        }}
        style={{margin: "5px"}}
    >
        <Button
            menu-role="button"
            aria-pressed="false"
            style={{height: "auto", padding: "5px 0"}}
        >
            <StyledIcon className="material-icons mdc-button__icon" aria-hidden="true">account_circle</StyledIcon>
            <StyledToggleIcon className="material-icons mdc-button__icon" aria-hidden="true">arrow_drop_down</StyledToggleIcon>
        </Button>
        <Menu
            menu-role="menu"
            offset="-106px"
        >
            <StyledButton
                link
                linkTo={`/${props.username}`}
            >
                Profile
            </StyledButton>
            <LogoutBtn />
        </Menu>
    </MenuContainer>
)

UserProfileMenu.propTypes = {
    username: PropTypes.string.isRequired,
}

export default UserProfileMenu