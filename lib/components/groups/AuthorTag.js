'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;width:100%;height:80px;margin-bottom:30px;z-index:2;'], ['display:flex;width:100%;height:80px;margin-bottom:30px;z-index:2;']),
    _templateObject2 = _taggedTemplateLiteral(['display:flex;flex-direction:column;margin-left:15px;max-width:100%;'], ['display:flex;flex-direction:column;margin-left:15px;max-width:100%;']),
    _templateObject3 = _taggedTemplateLiteral(['margin:auto 0;font-size:18px;font-family:Futura,Helvetica,sans-serif;font-weight:bold;color:#666666;'], ['margin:auto 0;font-size:18px;font-family:Futura,Helvetica,sans-serif;font-weight:bold;color:#666666;']),
    _templateObject4 = _taggedTemplateLiteral(['height:80px;width:80px;border-radius:50%;'], ['height:80px;width:80px;border-radius:50%;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _S3Image = require('../aws-amplify-react/S3Image');

var _S3Image2 = _interopRequireDefault(_S3Image);

var _SubscribeBtn = require('../Buttons/SubscribeBtn');

var _SubscribeBtn2 = _interopRequireDefault(_SubscribeBtn);

var _getKeyWithoutPrefix = require('../../utilities/getKeyWithoutPrefix');

var _getKeyWithoutPrefix2 = _interopRequireDefault(_getKeyWithoutPrefix);

var _globals = require('../../globals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1uw2ox6-0'
})(_templateObject);

var StyledColumnContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1uw2ox6-1'
})(_templateObject2);

var StyledHeader = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1uw2ox6-2'
})(_templateObject3);

var UserLogo = /*#__PURE__*/(0, _styledComponents2.default)(_S3Image2.default).withConfig({
    componentId: 'sc-1uw2ox6-3'
})(_templateObject4);

var AuthorTag = function AuthorTag(_ref) {
    var data = _ref.data;
    return _react2.default.createElement(
        StyledDiv,
        null,
        _react2.default.createElement(UserLogo, {
            identityId: data.identityId,
            level: 'protected',
            imgKey: (0, _getKeyWithoutPrefix2.default)(typeof data === 'undefined' ? _globals.default_user_logo_key : data.logoImg.file.key)
        }),
        _react2.default.createElement(
            StyledColumnContainer,
            null,
            _react2.default.createElement(
                StyledHeader,
                null,
                data.username
            ),
            _react2.default.createElement(_SubscribeBtn2.default, null)
        )
    );
};

AuthorTag.defaultProps = {
    data: {
        identityId: '',
        username: 'anon',
        logoImg: {
            file: {
                key: ''
            }
        }
    }
};

var _default = AuthorTag;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledDiv, 'StyledDiv', 'src/components/groups/AuthorTag.js');
    reactHotLoader.register(StyledColumnContainer, 'StyledColumnContainer', 'src/components/groups/AuthorTag.js');
    reactHotLoader.register(StyledHeader, 'StyledHeader', 'src/components/groups/AuthorTag.js');
    reactHotLoader.register(UserLogo, 'UserLogo', 'src/components/groups/AuthorTag.js');
    reactHotLoader.register(AuthorTag, 'AuthorTag', 'src/components/groups/AuthorTag.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/AuthorTag.js');
    leaveModule(module);
})();

;