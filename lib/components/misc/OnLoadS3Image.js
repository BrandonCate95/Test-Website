'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['opacity:', ''], ['opacity:', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _S3Image = require('../aws-amplify-react/S3Image');

var _S3Image2 = _interopRequireDefault(_S3Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerShowHide = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-16voeyf-0'
})(_templateObject, function (props) {
    return props.show ? '0' : '1';
});

var OnLoadS3Image = function (_React$Component) {
    _inherits(OnLoadS3Image, _React$Component);

    function OnLoadS3Image() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OnLoadS3Image);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OnLoadS3Image.__proto__ || Object.getPrototypeOf(OnLoadS3Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: true
        }, _this.componentWillMount = function () {
            if (_this.props.imgKey === '#') {
                _this.handleOnLoad();
            }
        }, _this.handleOnLoad = function () {
            _this.setState({ show: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OnLoadS3Image, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                level = _props.level,
                identityId = _props.identityId,
                imgKey = _props.imgKey,
                className = _props.className;

            return _react2.default.createElement(
                ContainerShowHide,
                { show: this.state.show },
                _react2.default.createElement(_S3Image2.default, {
                    level: level,
                    identityId: identityId,
                    imgKey: imgKey,
                    className: className,
                    onLoad: this.handleOnLoad.bind(this)
                })
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

    return OnLoadS3Image;
}(_react2.default.Component);

var _default = OnLoadS3Image;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(ContainerShowHide, 'ContainerShowHide', 'src/components/misc/OnLoadS3Image.js');
    reactHotLoader.register(OnLoadS3Image, 'OnLoadS3Image', 'src/components/misc/OnLoadS3Image.js');
    reactHotLoader.register(_default, 'default', 'src/components/misc/OnLoadS3Image.js');
    leaveModule(module);
})();

;