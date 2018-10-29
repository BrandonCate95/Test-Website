'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleScrollShow = function (_React$Component) {
    _inherits(TitleScrollShow, _React$Component);

    function TitleScrollShow() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TitleScrollShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TitleScrollShow.__proto__ || Object.getPrototypeOf(TitleScrollShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showTitle: false
        }, _this.componentDidMount = function () {
            window.addEventListener('scroll', _this.handleScroll);
        }, _this.componentWillUnmount = function () {
            window.removeEventListener('scroll', _this.handleScroll);
        }, _this.handleScroll = function (event) {
            _this.setState({
                showTitle: event.pageY > 100 || window.scrollY > 100 ? true : false
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TitleScrollShow, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.showTitle && props.children
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

    return TitleScrollShow;
}(_react2.default.Component);

var _default = TitleScrollShow;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(TitleScrollShow, 'TitleScrollShow', 'src/components/misc/TitleScrollShow.js');
    reactHotLoader.register(_default, 'default', 'src/components/misc/TitleScrollShow.js');
    leaveModule(module);
})();

;