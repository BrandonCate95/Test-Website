'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Popup = require('../../../components/mdc/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var NewPagePopup = function NewPagePopup(props) {
    return _react2.default.createElement(
        _Popup2.default,
        null,
        _react2.default.createElement(
            _Button2.default,
            {
                title: 'new page',
                icon: true,
                'popup-role': 'button'
            },
            'file_copy'
        ),
        _react2.default.createElement(
            _Popup.Popup,
            {
                'popup-role': 'popup',
                onAccept: function onAccept() {
                    props.handleNewPage();
                }
            },
            _react2.default.createElement(
                _Popup.PopupHeader,
                null,
                'Are you sure?'
            ),
            _react2.default.createElement(
                _Popup.PopupBody,
                null,
                'Note: Make sure you save your draft first'
            ),
            _react2.default.createElement(
                _Popup.PopupFooter,
                null,
                _react2.default.createElement(
                    _Popup.CancelButton,
                    null,
                    'Cancel'
                ),
                _react2.default.createElement(
                    _Popup.AcceptButton,
                    {
                        raised: true
                    },
                    'Yes'
                )
            )
        )
    );
};

var _default = NewPagePopup;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(NewPagePopup, 'NewPagePopup', 'src/pages/AddPostPage/components/AddPostPageNewPagePopup.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AddPostPage/components/AddPostPageNewPagePopup.js');
    leaveModule(module);
})();

;