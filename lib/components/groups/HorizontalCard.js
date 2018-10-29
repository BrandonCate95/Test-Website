'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['display:flex !important;flex-direction:row !important;flex:0 0 100%;max-width:100%;width:100%;position:relative !important;'], ['display:flex !important;flex-direction:row !important;flex:0 0 100%;max-width:100%;width:100%;position:relative !important;']),
    _templateObject2 = _taggedTemplateLiteral(['flex:0 0 40%;max-width:40%;width:100%;position:relative;border-right:1px solid #e4e4e4;div{div{position:static !important;}}'], ['flex:0 0 40%;max-width:40%;width:100%;position:relative;border-right:1px solid #e4e4e4;div{div{position:static !important;}}']),
    _templateObject3 = _taggedTemplateLiteral(['display:flex;flex-direction:column;flex:0 0 60%;max-width:60%;width:100%;position:relative;'], ['display:flex;flex-direction:column;flex:0 0 60%;max-width:60%;width:100%;position:relative;']),
    _templateObject4 = _taggedTemplateLiteral(['margin:10px 0 10px 10px;'], ['margin:10px 0 10px 10px;']),
    _templateObject5 = _taggedTemplateLiteral(['display:flex;margin-left:10px;'], ['display:flex;margin-left:10px;']),
    _templateObject6 = _taggedTemplateLiteral(['height:40px;width:40px;border-radius:50%;'], ['height:40px;width:40px;border-radius:50%;']),
    _templateObject7 = _taggedTemplateLiteral(['margin:0 5px;display:flex;align-items:center;justify-content:center;'], ['margin:0 5px;display:flex;align-items:center;justify-content:center;']),
    _templateObject8 = _taggedTemplateLiteral(['margin:10px;'], ['margin:10px;']),
    _templateObject9 = _taggedTemplateLiteral(['opacity:', ''], ['opacity:', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _S3Image = require('../aws-amplify-react/S3Image');

var _S3Image2 = _interopRequireDefault(_S3Image);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var StyledCard = /*#__PURE__*/(0, _styledComponents2.default)(_Card2.default).withConfig({
    componentId: 'sc-2378vj-0'
})(_templateObject);

var ImgContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-2378vj-1'
})(_templateObject2);

var ContentContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-2378vj-2'
})(_templateObject3);

var Title = /*#__PURE__*/_styledComponents2.default.h1.withConfig({
    componentId: 'sc-2378vj-3'
})(_templateObject4);

var UserContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-2378vj-4'
})(_templateObject5);

var UserLogo = /*#__PURE__*/(0, _styledComponents2.default)(_S3Image2.default).withConfig({
    componentId: 'sc-2378vj-5'
})(_templateObject6);

var Author = /*#__PURE__*/_styledComponents2.default.h4.withConfig({
    componentId: 'sc-2378vj-6'
})(_templateObject7);

var Desc = /*#__PURE__*/_styledComponents2.default.p.withConfig({
    componentId: 'sc-2378vj-7'
})(_templateObject8);

var ContainerShowHide = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-2378vj-8'
})(_templateObject9, function (props) {
    return props.show ? '0' : '1';
});

var HorizontalCard = function (_React$Component) {
    _inherits(HorizontalCard, _React$Component);

    function HorizontalCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, HorizontalCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalCard.__proto__ || Object.getPrototypeOf(HorizontalCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: true
        }, _this.componentWillMount = function () {
            if (_this.props.imgKey === '#') {
                _this.handleOnLoad();
            }
        }, _this.handleOnLoad = function () {
            _this.setState({ show: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HorizontalCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                link = _props.link,
                identityId = _props.identityId,
                imgKey = _props.imgKey,
                title = _props.title,
                logoKey = _props.logoKey,
                author = _props.author,
                desc = _props.desc;

            return _react2.default.createElement(
                ContainerShowHide,
                { show: false },
                _react2.default.createElement(
                    _Link3.default,
                    { to: link, style: { textDecoration: "none", color: "inherit" } },
                    _react2.default.createElement(
                        StyledCard,
                        {
                            style: { margin: "10px 0" }
                        },
                        _react2.default.createElement(
                            ImgContainer,
                            { className: 'img-container--16-9' },
                            _react2.default.createElement(_S3Image2.default, {
                                level: 'protected',
                                identityId: identityId,
                                imgKey: imgKey,
                                onLoad: this.handleOnLoad.bind(this)
                            })
                        ),
                        _react2.default.createElement(
                            ContentContainer,
                            null,
                            _react2.default.createElement(
                                Title,
                                { className: 'mdc-typography--headline4' },
                                title
                            ),
                            _react2.default.createElement(
                                UserContainer,
                                null,
                                _react2.default.createElement(UserLogo, {
                                    level: 'protected',
                                    identityId: identityId,
                                    imgKey: logoKey
                                }),
                                _react2.default.createElement(
                                    Author,
                                    { className: 'mdc-typography--headline6' },
                                    author
                                )
                            ),
                            _react2.default.createElement(
                                Desc,
                                { className: 'mdc-typography--body1' },
                                desc
                            )
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

    return HorizontalCard;
}(_react2.default.Component);

var _default = HorizontalCard;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledCard, 'StyledCard', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(ImgContainer, 'ImgContainer', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(ContentContainer, 'ContentContainer', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(Title, 'Title', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(UserContainer, 'UserContainer', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(UserLogo, 'UserLogo', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(Author, 'Author', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(Desc, 'Desc', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(ContainerShowHide, 'ContainerShowHide', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(HorizontalCard, 'HorizontalCard', 'src/components/groups/HorizontalCard.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/HorizontalCard.js');
    leaveModule(module);
})();

;