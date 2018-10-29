'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['width:', ';height:', ';font-size:', ' !important;'], ['width:', ';height:', ';font-size:', ' !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = /*#__PURE__*/_styledComponents2.default.i.attrs({
    sizepx: function sizepx(props) {
        if (props.small) return '12px';else if (props.medium) return '24px';else return '36px';
    }
}).withConfig({
    componentId: 'sc-8f31v1-0'
})(_templateObject, function (props) {
    return props.sizepx;
}, function (props) {
    return props.sizepx;
}, function (props) {
    return props.sizepx;
});

var Spinner = function Spinner(props) {
    return _react2.default.createElement(Icon, {
        className: '\n            fa fa-spinner fa-spin\n            ' + (props.primary ? 'mdc-theme-primary--color' : '') + '\n            ' + (props.secondary ? 'mdc-theme-secondary--color' : '') + '\n            ' + (props.neutral ? 'mdc-theme-neutral--color' : '') + '\n        ',
        style: props.style,
        small: props.small,
        medium: props.medium,
        large: props.large
    });
};

var _default = Spinner;
exports.default = _default;

// import React from 'react'
// import PropTypes from 'prop-types'
// import CircularProgress from '@material-ui/core/CircularProgress'

// const Spinner = (props) => {

//     var size
//     if(props.small) size = 20
//     else if(props.medium) size = 40
//     else if(props.large) size = 60

//     return <CircularProgress    
//         size={size}
//         className={`
//             ${props.primary ? 'mdc-theme-primary--color' : ''}
//             ${props.secondary ? 'mdc-theme-secondary--color' : ''}
//             ${props.neutral ? 'mdc-theme-neutral--color' : ''}
//             ${!props.primary && !props.secondary && !props.neutral ? 'mdc-theme-primary--color' : ''}
//         `}
//         style={props.style}
//     />
// }

// Spinner.propTypes = {
//     primary: PropTypes.bool,
//     secondary: PropTypes.bool,
//     neutral: PropTypes.bool,
//     small: PropTypes.bool,
//     medium: PropTypes.bool,
//     large: PropTypes.bool,
// }

// export default Spinner;

;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Icon, 'Icon', 'src/components/misc/Spinner.js');
    reactHotLoader.register(Spinner, 'Spinner', 'src/components/misc/Spinner.js');
    reactHotLoader.register(_default, 'default', 'src/components/misc/Spinner.js');
    leaveModule(module);
})();

;