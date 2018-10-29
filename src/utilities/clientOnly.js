import React from 'react'

const clientOnly = function (Wrapped) {
    var canUseDOM = !!(
        (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
    )
    var Component = React.createClass({
        render: function () {
            if (canUseDOM) {
                return null
            } else {
                return React.createElement(Wrapped, this.props)
            }
        }
    })

    Component.contextTypes = serverContextTypes;

    return Component
}

export default clientOnly