'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _withRouter2 = require('react-router-dom/withRouter');

var _withRouter3 = _interopRequireDefault(_withRouter2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['height:auto !important;input{height:auto !important;}'], ['height:auto !important;input{height:auto !important;}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getURLParamsByName = require('../../utilities/getURLParamsByName');

var _getURLParamsByName2 = _interopRequireDefault(_getURLParamsByName);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextField = require('../mdc/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Input = require('../mdc/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextField = /*#__PURE__*/(0, _styledComponents2.default)(_TextField2.default).withConfig({
    componentId: 'mgjsz-0'
})(_templateObject);

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            search: (0, _getURLParamsByName2.default)('q') || ""
        }, _this.submitSearch = function (e) {
            e.preventDefault();
            //dont use redirect as it pops off previous history state
            _this.props.history.push('/Search?q=' + _this.state.search);
        }, _this.handleChange = function (e) {
            _this.setState({ search: e.target.value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(e) {
            this.setState({ search: (0, _getURLParamsByName2.default)('q') || "" });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: this.props.className, onSubmit: this.submitSearch },
                _react2.default.createElement(
                    StyledTextField,
                    {
                        fullWidth: true,
                        label: 'Search',
                        trailingIcon: _react2.default.createElement(
                            _Button2.default,
                            {
                                type: 'submit',
                                style: {
                                    right: "0px",
                                    bottom: "-6px",
                                    padding: "0",
                                    pointerEvents: "auto",
                                    cursor: "pointer"
                                },
                                icon: true
                            },
                            'search'
                        )
                    },
                    _react2.default.createElement(_Input2.default, {
                        style: { height: "auto !important" },
                        placeholder: 'Search',
                        value: this.state.search,
                        onChange: this.handleChange
                    })
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

    return SearchBar;
}(_react2.default.Component);

var _default = (0, _withRouter3.default)(SearchBar);

//adds access to history prop
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledTextField, 'StyledTextField', 'src/components/inputs/SearchBar.js');
    reactHotLoader.register(SearchBar, 'SearchBar', 'src/components/inputs/SearchBar.js');
    reactHotLoader.register(_default, 'default', 'src/components/inputs/SearchBar.js');
    leaveModule(module);
})();

;