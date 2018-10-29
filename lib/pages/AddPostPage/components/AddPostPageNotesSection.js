'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;border-top:1px dashed #aaa;font-size:14px'], ['display:flex;border-top:1px dashed #aaa;font-size:14px']),
    _templateObject2 = _taggedTemplateLiteral(['display:inline-block;margin-top:10px;color:#bbb;'], ['display:inline-block;margin-top:10px;color:#bbb;']),
    _templateObject3 = _taggedTemplateLiteral(['display:inline-block;font-size:12px;color:#ccc;margin-left:auto;'], ['display:inline-block;font-size:12px;color:#ccc;margin-left:auto;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _AutoHeightTextArea = require('../../../components/inputs/AutoHeightTextArea');

var _AutoHeightTextArea2 = _interopRequireDefault(_AutoHeightTextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1vuviet-0'
})(_templateObject);

var StyledHeader = /*#__PURE__*/_styledComponents2.default.h6.withConfig({
    componentId: 'sc-1vuviet-1'
})(_templateObject2);

var StyledNotice = /*#__PURE__*/_styledComponents2.default.p.withConfig({
    componentId: 'sc-1vuviet-2'
})(_templateObject3);

var NotesSection = function NotesSection(_ref) {
    var preview = _ref.preview,
        notes = _ref.notes,
        handleInputChange = _ref.handleInputChange;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        !preview && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                StyledDiv,
                null,
                _react2.default.createElement(
                    StyledHeader,
                    { className: 'mdc-typography--subtitle2' },
                    'Additional Notes'
                ),
                _react2.default.createElement(
                    StyledNotice,
                    null,
                    '*Anything below dotted line will not be uploaded*'
                )
            ),
            _react2.default.createElement(_AutoHeightTextArea2.default, {
                id: 'notes-textarea',
                name: 'notes',
                value: notes,
                handleTextAreaChange: handleInputChange,
                placeholder: '...'
            })
        )
    );
};

var _default = NotesSection;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledDiv, 'StyledDiv', 'src/pages/AddPostPage/components/AddPostPageNotesSection.js');
    reactHotLoader.register(StyledHeader, 'StyledHeader', 'src/pages/AddPostPage/components/AddPostPageNotesSection.js');
    reactHotLoader.register(StyledNotice, 'StyledNotice', 'src/pages/AddPostPage/components/AddPostPageNotesSection.js');
    reactHotLoader.register(NotesSection, 'NotesSection', 'src/pages/AddPostPage/components/AddPostPageNotesSection.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AddPostPage/components/AddPostPageNotesSection.js');
    leaveModule(module);
})();

;