import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Icon = styled.i.attrs({
    sizepx: props => 
    {
        if(props.small) return '12px'
        else if(props.medium) return '24px'
        else return '36px'
    }
})`
    width: ${props => props.sizepx};
    height: ${props => props.sizepx};
    font-size: ${props => props.sizepx} !important;
`

const Spinner = (props) => (
    <Icon
        className={`
            fa fa-spinner fa-spin
            ${props.primary ? 'mdc-theme-primary--color' : ''}
            ${props.secondary ? 'mdc-theme-secondary--color' : ''}
            ${props.neutral ? 'mdc-theme-neutral--color' : ''}
        `}
        style={props.style}
        small={props.small}
        medium={props.medium}
        large={props.large}
    ></Icon>
)

Spinner.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    neutral: PropTypes.bool,
    size: PropTypes.number,
}

export default Spinner