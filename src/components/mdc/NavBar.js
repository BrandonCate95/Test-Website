import React from 'react'
import PropTypes from 'prop-types'
// import {MDCTopAppBar} from '@material/top-app-bar/index'

export const StartSection = ({className, children}) => (
    <div className={`mdc-top-app-bar__section mdc-top-app-bar__section--align-start ${className}`}>
        {children}
    </div>
)

export const MiddleSection = ({className, children}) => (
    <div className={`mdc-top-app-bar__section mdc-top-app-bar__section--align-center ${className}`}>
        {children}
    </div>
)

export const EndSection = ({className, children}) => (
    <div className={`mdc-top-app-bar__section mdc-top-app-bar__section--align-end  ${className}`} role="toolbar">
        {children}
    </div>
)

class NavBar extends React.Component {

    topAppBar = null
    topAppBarRef = React.createRef()

    componentDidMount = async () => {
        const {MDCTopAppBar} = await import(/* webpackChunkName: "material-common" */ '@material/top-app-bar')
        this.topAppBar = new MDCTopAppBar(this.topAppBarRef.current)
    }
    
    componentWillUnmount = () => {
        this.topAppBar.destroy()
    }

    render(){
        const {props} = this
        return(
            <header 
                ref={this.topAppBarRef} 
                className={`mdc-top-app-bar
                    ${props.fixed ? 'mdc-top-app-bar--fixed' : ''}
                    ${props.dense ? 'mdc-top-app-bar--dense' : ''}
                `}
            >
                <div className="mdc-top-app-bar__row">
                    {props.children}
                </div>
            </header>
        )
    }
}

NavBar.propTypes = {
    fixed: PropTypes.bool,
    dense: PropTypes.bool,
}

export default NavBar