import React from 'react'
import styled from 'styled-components'
import Button from '../mdc/Button'

const Row = styled.div`
    display: flex;
    margin: auto 0;
`

const CloseIcon = styled.i`
    margin-left: 8px !important;
    margin-right: -4px !important;
    height: 12px !important;
    width: 12px !important;
    font-size: 12px !important;
`

class SubscribeBtn extends React.Component {

    state = {
        subscribed: false,
        subscriberCount: 1000,
        subscribeHover: false,
    }

    handleSubscribe = () => {
        this.setState({
            subscribed: this.state.subscribed ? false : true,
            subscriberCount: this.state.subscribed ? this.state.subscriberCount - 1 : this.state.subscriberCount + 1,
        })
    }

    render(){
        const { subscribed, subscriberCount, subscribeHover } = this.state 
        return(
            <Row>
                <Button
                    style={{
                        width: "140px",
                        fontWeight: subscribed ? 'bold' : 'normal',
                    }}
                    onMouseEnter={!subscribed ? () => this.setState({subscribeHover: true}) : undefined}
                    onMouseLeave={!subscribed ? () => this.setState({subscribeHover: false}) : undefined}
                    onClick={this.handleSubscribe.bind(this)}
                    raised={!subscribed ? true : undefined}
                    dense
                    outlined={subscribed ? true : undefined}
                    tertiary
                >

                    {!subscribed &&
                        <React.Fragment>
                            <i className="material-icons mdc-button__icon" aria-hidden="true">add</i>
                            {subscribeHover ? subscriberCount : 'subscribe'}
                        </React.Fragment>
                    }
                    {subscribed &&
                        <React.Fragment>
                            {subscriberCount}
                            <CloseIcon className="material-icons mdc-button__icon" aria-hidden="true">close</CloseIcon>
                        </React.Fragment>                            
                    }

                </Button>
            </Row>
        )
    }
}

export default SubscribeBtn