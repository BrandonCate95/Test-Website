import React from 'react'
// import {MDCRipple} from '@material/ripple'

class Card extends React.Component {

    card = null
    cardRef = React.createRef()

    componentDidMount = async () => {
        const {MDCRipple} = await import(/* webpackChunkName: "material-common" */ '@material/ripple')
        this.card = new MDCRipple(this.cardRef.current)
    }

    componentWillUnmount = () => {
        this.card.destroy()
    }

    render(){
        const {props} = this
        return(
            <div className="mdc-card" style={props.style}>
                <div ref={this.cardRef} className={`mdc-card__primary-action ${props.className}`}>
                    {props.children}
                </div>
            </div>
        )
    }
}

export default Card