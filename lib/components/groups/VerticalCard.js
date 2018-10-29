'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['display:flex;flex-direction:row;align-items:center;margin-bottom:10px;'], ['display:flex;flex-direction:row;align-items:center;margin-bottom:10px;']),
    _templateObject2 = _taggedTemplateLiteral(['height:30px;width:30px;border-radius:50%;margin:0 10px;'], ['height:30px;width:30px;border-radius:50%;margin:0 10px;']),
    _templateObject3 = _taggedTemplateLiteral(['flex:0 0 32.3%;'], ['flex:0 0 32.3%;']),
    _templateObject4 = _taggedTemplateLiteral(['margin-top:5px;button{padding:0px !important;}'], ['margin-top:5px;button{padding:0px !important;}']),
    _templateObject5 = _taggedTemplateLiteral(['max-width:100%;'], ['max-width:100%;']),
    _templateObject6 = _taggedTemplateLiteral(['opacity:', ''], ['opacity:', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _S3Image = require('../aws-amplify-react/S3Image');

var _S3Image2 = _interopRequireDefault(_S3Image);

var _reactCard = require('@material/react-card');

var _getKeyWithoutPrefix = require('../../utilities/getKeyWithoutPrefix');

var _getKeyWithoutPrefix2 = _interopRequireDefault(_getKeyWithoutPrefix);

var _GetPost = require('../../queries/components/GetPost');

var _GetPost2 = _interopRequireDefault(_GetPost);

var _PostCRUDPopups = require('./PostCRUDPopups');

var _PostCRUDPopups2 = _interopRequireDefault(_PostCRUDPopups);

var _Card = require('../mdc/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'lf4ghh-0'
})(_templateObject);

var UserLogo = /*#__PURE__*/(0, _styledComponents2.default)(_S3Image2.default).withConfig({
    componentId: 'lf4ghh-1'
})(_templateObject2);

var CardContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'lf4ghh-2'
})(_templateObject3);

var ButtonsContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'lf4ghh-3'
})(_templateObject4);

var StyledS3Image = /*#__PURE__*/(0, _styledComponents2.default)(_S3Image2.default).withConfig({
    componentId: 'lf4ghh-4'
})(_templateObject5);

var ContainerShowHide = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'lf4ghh-5'
})(_templateObject6, function (props) {
    return props.show ? '0' : '1';
});

var VerticalCard = function (_React$Component) {
    _inherits(VerticalCard, _React$Component);

    function VerticalCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VerticalCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VerticalCard.__proto__ || Object.getPrototypeOf(VerticalCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: true
        }, _this.componentWillMount = function () {
            if (_this.props.imgKey === '#') {
                _this.handleOnLoad();
            }
        }, _this.handleOnLoad = function () {
            _this.setState({ show: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VerticalCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                drafts = _props.drafts,
                username = _props.username,
                postId = _props.postId,
                imgKey = _props.imgKey,
                identityId = _props.identityId,
                title = _props.title,
                logoImg = _props.logoImg,
                draftEdit = _props.draftEdit;

            return _react2.default.createElement(
                CardContainer,
                null,
                _react2.default.createElement(
                    ContainerShowHide,
                    { show: this.state.show },
                    _react2.default.createElement(
                        _Link3.default,
                        {
                            to: {
                                pathname: drafts ? '/AddPage' : '/' + username + '/' + postId,
                                state: { postId: postId }
                            },
                            style: { textDecoration: "none" }
                        },
                        _react2.default.createElement(
                            _Card2.default,
                            null,
                            _react2.default.createElement(
                                _reactCard.CardMedia,
                                { wide: true },
                                _react2.default.createElement(StyledS3Image, {
                                    imgKey: drafts ? 'imgs/' + imgKey : imgKey,
                                    level: 'protected',
                                    identityId: identityId,
                                    onLoad: this.handleOnLoad.bind(this)
                                })
                            ),
                            _react2.default.createElement(
                                'h1',
                                {
                                    style: { margin: "10px" },
                                    className: 'mdc-typography--headline6'
                                },
                                title
                            ),
                            _react2.default.createElement(
                                Row,
                                null,
                                _react2.default.createElement(UserLogo, {
                                    imgKey: (0, _getKeyWithoutPrefix2.default)(logoImg.file.key),
                                    level: 'protected',
                                    identityId: identityId
                                }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mdc-typography--subtitle2' },
                                    username
                                )
                            )
                        )
                    ),
                    draftEdit && _react2.default.createElement(
                        ButtonsContainer,
                        null,
                        _react2.default.createElement(
                            _GetPost2.default,
                            { postId: postId },
                            _react2.default.createElement(_PostCRUDPopups2.default, { postId: postId })
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return VerticalCard;
}(_react2.default.Component);

var _default = VerticalCard;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Row, 'Row', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(UserLogo, 'UserLogo', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(CardContainer, 'CardContainer', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(ButtonsContainer, 'ButtonsContainer', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(StyledS3Image, 'StyledS3Image', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(ContainerShowHide, 'ContainerShowHide', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(VerticalCard, 'VerticalCard', 'src/components/groups/VerticalCard.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/VerticalCard.js');
    leaveModule(module);
})();

;