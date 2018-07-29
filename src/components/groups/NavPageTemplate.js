import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {MDCPersistentDrawer} from '@material/drawer'

const StyledDiv = styled.div`
    display: flex;
    margin: 0;
    min-height: 100%;
`

const ContentContainer = styled.div`
    margin-top: 64px;
    width: 100%;
    margin-left: ${props => props.sideBarOpen ? '240px' : '0'}
`

export const NavBarContainer = (props) => (
    <React.Fragment>
        {console.log(props)}
        {React.cloneElement(props.children, { ...props })}
    </React.Fragment>
)

export const SideBarContainer = (props) => (
    <React.Fragment>
        {console.log(props)}
        {React.cloneElement(props.children, { ...props })}
    </React.Fragment>
)

export const PageContentContainer = (props) => (
    <React.Fragment>
        {console.log(props)}
        {React.cloneElement(props.children, { ...props })}
    </React.Fragment>
)

class NavPageTemplate extends React.Component {

    state = {
        sideBarOpen: this.props.sideBarInitialOpen || false,
    }

    drawer = null
    drawerRef = React.createRef()

    toggleSidebar = () => {
        this.drawer.open = this.drawer.open ? false : true 
        this.setState({sideBarOpen: this.drawer.open})
    }   

    componentDidMount = () => {
        this.drawer = new MDCPersistentDrawer(this.drawerRef.current);
    }

    componentWillUnmount = () => {
        this.drawer.destroy()
    }

    render(){
        const {props} = this
        const navBarContainer = props.children.filter((child) => child.props["navpage-role"] === 'navbar')
        const pageContentContainer = props.children.filter((child) => child.props["navpage-role"] === 'page-content')
        console.log(props)
        return(
            <React.Fragment>

                {React.cloneElement(navBarContainer[0], { navBarType: props.navBarType, toggleSidebar: this.toggleSidebar.bind(this) })}

                <StyledDiv>

                    <aside 
                        ref={this.drawerRef} 
                        style={{display: "flex", flexDirection: "column", position: "fixed", height: "100%"}} 
                        className={`mdc-drawer mdc-drawer--persistent mdc-typography ${props.sideBarInitialOpen ? 'mdc-drawer--open' : ''}`}
                    >
                        <nav className="mdc-drawer__drawer">
                        <div className="mdc-drawer__toolbar-spacer"></div>
                            <nav className="mdc-drawer__content mdc-list" style={{height: "100%"}}>

                                {props.children.filter((child) => child.props["navpage-role"] === 'sidebar')}

                            </nav>
                        </nav>
                    </aside>

                    <ContentContainer sideBarOpen={this.state.sideBarOpen}>
                        {React.cloneElement(pageContentContainer[0], { sideBarOpen: this.state.sideBarOpen })}
                    </ContentContainer>

                </StyledDiv>

            </React.Fragment>
        );
    }
}

NavPageTemplate.propTypes = {
    sideBarOpen: PropTypes.bool,
    sideBarInitialOpen: PropTypes.bool,
}

export default NavPageTemplate