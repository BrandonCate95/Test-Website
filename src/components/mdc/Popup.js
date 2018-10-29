import React from 'react'
// import {MDCDialog} from '@material/dialog'
import Button from './Button'

export const Popup = (props) => (
    <div className="mdc-dialog__surface">
        {props.children}
    </div>
)

export const PopupHeader = (props) => (
    <header className="mdc-dialog__header">
        <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
            {props.children}
        </h2>
    </header>
)

export const PopupBody = (props) => (
    <section id="my-mdc-dialog-description" className="mdc-dialog__body">
        {props.children}
    </section>
)

export const PopupFooter = (props) => (
    <footer className="mdc-dialog__footer">
        {props.children}
    </footer>
)

export const CancelButton = (props) => (
    <Button 
        type="button" 
        className={`mdc-dialog__footer__button mdc-dialog__footer__button--cancel ${props.className}`}
        {...props}
    >
        {props.children}
    </Button>
)

export const AcceptButton = (props) => (
    <Button 
        type="button" 
        className={`mdc-dialog__footer__button mdc-dialog__footer__button--accept ${props.className}`}
        {...props}
    >
        {props.children}
    </Button>
)

class PopupContainer extends React.Component {
    
    dialog = null
    dialogRef = React.createRef()
    dialogActivation = null
    dialogActivationRef = React.createRef()

    componentDidMount = async () => {
        const {MDCDialog} = await import(/* webpackChunkName: "MDCDialog" */ '@material/dialog')
        this.dialog = new MDCDialog(this.dialogRef.current)

        const popup = this.props.children.filter((child) => child.props["popup-role"] === 'popup')[0]
        this.dialog.listen('MDCDialog:accept', popup.props.onAccept)
        
        this.dialogActivationRef.current.addEventListener('click', this.showDialog)
    }

    componentWillUnmount = () => {
        this.dialogActivationRef.current.removeEventListener('click', this.showDialog)
        this.dialog.destroy()
    }

    showDialog = (evt) => {
        this.dialog.show()
    }

    render(){
        const {props} = this
        return(
            <React.Fragment>
                <span ref={this.dialogActivationRef}>
                    {props.children.filter((child) => child.props["popup-role"] === 'button')}
                </span>

                <aside 
                    ref={this.dialogRef}
                    className="mdc-dialog"
                    role="alertdialog"
                    aria-labelledby="my-mdc-dialog-label"
                    aria-describedby="my-mdc-dialog-description"
                >
                    {props.children.filter((child) => child.props["popup-role"] === 'popup')}
                    <div className="mdc-dialog__backdrop"></div>
                </aside>
            </React.Fragment>
        )
    }
}

export default PopupContainer