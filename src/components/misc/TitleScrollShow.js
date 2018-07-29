import React from 'react'

class TitleScrollShow extends React.Component {

    state = { 
        showTitle: false,
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = (event) => {
        this.setState({
            showTitle: event.pageY > 100 || window.scrollY > 100 ? true : false
        })
    }

    render(){
        const {props} = this
        return(
            <React.Fragment>
                {this.state.showTitle &&
                    props.children
                }
            </React.Fragment>
        )
    }
}

export default TitleScrollShow