import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import {MDCMenu, Corner} from '@material/menu'

const StyledMenuDiv = styled.div`
    left: ${props => props.left} !important; 
`   //menu width - btn width

export const Menu = ({style, className, children}) => {
    var i = 0
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { className: `mdc-list-item ${className}`, role: "menuitem", tabIndex: `${i++}`, style: {width: "100%", ...style} }));

    return (
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
            {childrenWithProps}
        </ul>
    )
}

Menu.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

class MenuContainer extends React.Component {
    
    menu = null
    menuEl = React.createRef()
    menuButtonEl = React.createRef()

    componentDidMount = async () => {
      const {MDCMenu, Corner} = await import(/* webpackChunkName: "material-common" */ '@material/menu')
      // Instantiation
      this.menu = new MDCMenu(this.menuEl.current)
      // Toggle menu open
      this.menuButtonEl.current.addEventListener('click', this.toggleMenu)
      // Close Menu if clicked elsewhere
      if(this.props.closeMenu){ this.menuEl.current.addEventListener('MDCMenu:cancel', this.props.closeMenu) }
      // Set Anchor Corner to Bottom End
      this.menu.setAnchorCorner(Corner.BOTTOM_START)
      // Turn off menu open animations
      this.menu.quickOpen = true
    }

    componentWillUnmount = () => {
        this.menuButtonEl.current.removeEventListener('click', this.toggleMenu)
        if(this.props.closeMenu){ this.menuEl.current.removeEventListener('MDCMenu:cancel', this.props.closeMenu) }
        this.menu.destroy()
    }

    toggleMenu = (evt) => {
        this.menu.open = !this.menu.open
        this.props.openMenu(evt)
    }

    render(){
        const {props} = this
        const menu = props.children.filter((child) => child.props["menu-role"] === 'menu')[0]
        return(
            <div style={props.style}>
                <div id="demo-menu" className="mdc-menu-anchor">

                    <span ref={this.menuButtonEl}>
                        {props.children.filter((child) => child.props["menu-role"] === 'button')}
                    </span>

                    <StyledMenuDiv innerRef={this.menuEl} className="mdc-menu" tabIndex="-1" left={menu.props.offset}>
                        {menu}
                    </StyledMenuDiv>

                </div>
            </div>
        )
    }
}

MenuContainer.propTypes = {
    style: PropTypes.object,
}

export default MenuContainer