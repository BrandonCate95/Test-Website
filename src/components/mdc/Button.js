import React from 'react'
import PropTypes from 'prop-types'
import {MDCRipple} from '@material/ripple'
import { Link } from 'react-router-dom'
import Spinner from '../misc/Spinner'

class Button extends React.Component {

    buttonRipple = null
    btnRef = !this.props.icon ? React.createRef() : undefined

    componentDidMount = () => {
        if(!this.props.icon){
            this.buttonRipple = new MDCRipple(this.btnRef.current);
        }
    }

    componentWillUnmount = () => {
        if(!this.props.icon){
            this.buttonRipple.destroy()
        }
    }

    render(){
        const { props } = this 

        const button = (
            <button 
                ref={!props.icon ? this.btnRef : undefined}
                title={props.title}
                type={props.type}
                role={props.role}
                tabIndex={props.tabIndex}
                style={props.style}
                className={`
                    ${props.icon ? 'mdc-icon-button material-icons mdc-ripple-bounded--small' : 'mdc-button' }
                    ${props.raised ? 'mdc-button--raised' : ''}
                    ${props.dense ? 'mdc-button--dense' : ''}
                    ${props.outlined ? 'mdc-button--outlined' : ''}
                    ${props.primary ? 'mdc-theme-primary' : ''}
                    ${props.secondary ? 'mdc-theme-secondary' : ''}
                    ${props.tertiary ? 'mdc-theme-tertiary' : ''}
                    ${props.neutral ? 'mdc-theme-neutral' : ''}
                    ${props.error ? 'mdc-theme-tertiary--dark' : ''}
                    ${props.className}
                `}
                onClick={props.onClick}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                disabled={props.disabled}
                aria-pressed={props['aria-pressed']}
            >
                {props.icon && !props.loading &&
                    props.children
                }
                {!props.icon &&
                    props.children
                }
                {props.loading &&
                    <Spinner 
                        primary={props.primary}
                        secondary={props.secondary}
                        neutral={props.neutral}
                        style={{marginLeft: '5px'}}
                        small={!props.icon}
                        medium={props.icon}
                    />
                }
            </button>
        )
        
        if(props.link){
            return (
                <Link 
                    to={props.linkTo} 
                    style={{textDecoration: "none", color: "inherit", ...props.style}}
                    className={props.className}
                >
                    {button}
                </Link>
            )
        }

        return button
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.bool,
    raised: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    neutral: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.number,
    link: PropTypes.bool,
    linkTo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    title: PropTypes.string,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    "aria-pressed": PropTypes.string,
}

export default Button