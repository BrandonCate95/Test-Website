import React from 'react'
import styled from 'styled-components'
// import {MDCTabBar} from '@material/tabs'

const DefaultPanel = styled.div`
    display: none !important;
    &.active{
        display: flex !important;
    }
`

export const Nav = (props) => (
    <a 
        role="tab" 
        aria-controls={props["aria-controls"]}
        className={`mdc-tab ${props.className}`}
    >
        {props.children}
    </a>
)

export const Navs = ({style, className, children}) => {
    
    const validChildren = children.filter((child) => child.props && child.props["tab-role"] === 'nav')

    var i = 1
    const childrenWithProps = React.Children.map(validChildren, child => 
      React.cloneElement(child, { ...(i === 1 && {className: `mdc-tab--active`} ), "aria-controls": `panel-${i++}` })
    )

    return(
        <React.Fragment>
            {childrenWithProps}
        </React.Fragment>
    )
}

export const Panel = (props) => (
    <DefaultPanel
        id={props.id}
        className={`panel ${props.className}`}
        role="tabpanel"
        aria-hidden={props["aria-hidden"]}
    >
        {props.children}
    </DefaultPanel>
)

export const Panels = ({children}) => {

    const validChildren = children.filter((child) => child.props && child.props["tab-role"] === 'panel')

    var i = 1
    const childrenWithProps = React.Children.map(validChildren, child => 
      React.cloneElement(child, { ...(i === 1 && {className: `active`} ), id: `panel-${i++}`, "aria-hidden": i === 1 ? "false" : "true" })
    )

    return(
        <React.Fragment>
            {childrenWithProps}
        </React.Fragment>
    )
}

const Dot = (props) => (
    <a 
        className={`dot ${props.className}`} 
        data-trigger={props["data-trigger"]}
    > </a>
)

class TabContainer extends React.Component {

    dynamicTabBar = null
    dynamicTabBarRef = React.createRef()
    dotsRef = React.createRef()
    panelsRef = React.createRef()

    componentDidMount = async () => {
        const {MDCTabBar} = await import(/* webpackChunkName: "MDCTabBar" */ '@material/tabs')
        this.dynamicTabBar = window.dynamicTabBar = new MDCTabBar(this.dynamicTabBarRef.current)
  
        this.dynamicTabBar.tabs.forEach(function(tab) {
          tab.preventDefaultOnClick = true
        })
  
        this.dynamicTabBar.listen('MDCTabBar:change', this.tabBarChange)
  
        this.dotsRef.current.addEventListener('click', this.dotsChange)
    }

    componentWillUnmount = () => {
        this.dynamicTabBar.destroy()
        this.dotsRef.current.removeEventListener('click', this.dotsChange)
    }

    updateDot = (index) => {
        var activeDot = this.dotsRef.current.querySelector('.dot.active');
        if (activeDot) {
          activeDot.classList.remove('active');
        }
        var newActiveDot = this.dotsRef.current.querySelector('.dot:nth-child(' + (index + 1) + ')');
        if (newActiveDot) {
          newActiveDot.classList.add('active');
        }
    }

    updatePanel = (index) => {
        var activePanel = this.panelsRef.current.querySelector('.panel.active');
        if (activePanel) {
          activePanel.classList.remove('active');
        }
        var newActivePanel = this.panelsRef.current.querySelector('.panel:nth-child(' + (index + 1) + ')');
        if (newActivePanel) {
          newActivePanel.classList.add('active');
        }
      }

    tabBarChange = ({detail: tabs}) => {
        var nthChildIndex = tabs.activeTabIndex
  
        this.updatePanel(nthChildIndex)
        this.updateDot(nthChildIndex)
    }

    dotsChange = (evt) => {
        if (!evt.target.classList.contains('dot')) {
            return;
        }
  
        evt.preventDefault();
  
        var dotIndex = [].slice.call(this.dotsRef.current.querySelectorAll('.dot')).indexOf(evt.target);
  
        if (dotIndex >= 0) {
            this.dynamicTabBar.activeTabIndex = dotIndex;
        }
  
        this.updatePanel(dotIndex);
        this.updateDot(dotIndex);
    }

    render(){
        const {props} = this
        const tabs = props.children.filter((child) => child.props["tab-role"] === 'navs')
        return(
            <React.Fragment>
                <section>
                    <nav ref={this.dynamicTabBarRef} id="dynamic-tab-bar" className="mdc-tab-bar" role="tablist" style={{margin: "0"}}>
                        {tabs}
                        <span className="mdc-tab-bar__indicator"></span>
                    </nav>
                </section>
                <section>
                    <div ref={this.panelsRef} className="panels">
                        {props.children.filter((child) => child.props["tab-role"] === 'panels')}
                    </div>
                    <div ref={this.dotsRef} className="dots">
                        {tabs[0].props.children.forEach((child, index) =>
                            <Dot 
                                className={index === 0 ? "active" : ''}
                                data-trigger={`panel-${index + 1}`}
                            />
                        )}
                    </div>
                </section>
            </React.Fragment>
        )
    }
} 

export default TabContainer