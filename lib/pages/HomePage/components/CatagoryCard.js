'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['flex:0 0 33.33333%;max-width:33.33333%;position:relative;width:100%;'], ['flex:0 0 33.33333%;max-width:33.33333%;position:relative;width:100%;']),
    _templateObject2 = _taggedTemplateLiteral(['width:100%;display:flex;flex-wrap:wrap;'], ['width:100%;display:flex;flex-wrap:wrap;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMaterialIcon = require('@material/react-material-icon');

var _reactMaterialIcon2 = _interopRequireDefault(_reactMaterialIcon);

var _Button = require('../../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Col4 = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1eqafpt-0'
})(_templateObject);

var Card = function Card(_ref) {
    var catagoryName = _ref.catagoryName,
        symbolName = _ref.symbolName;
    return _react2.default.createElement(
        Col4,
        null,
        _react2.default.createElement(
            _Button2.default,
            {
                link: true,
                linkTo: '/Search?q=' + catagoryName,
                style: { display: "flex", flexDirection: "column", height: "auto", padding: "0", margin: "0 auto" },
                neutral: true
            },
            _react2.default.createElement(_reactMaterialIcon2.default, {
                className: 'mdc-theme-primary--color',
                style: {
                    fontSize: "calc(4vh + 4vw)",
                    width: "calc(4vh + 4vw)",
                    height: "calc(4vh + 4vw)",
                    marginRight: "0"
                },
                icon: symbolName
            }),
            catagoryName
        )
    );
};

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1eqafpt-1'
})(_templateObject2);

var CatagoryCard = function CatagoryCard(props) {
    return _react2.default.createElement(
        Row,
        null,
        props.catagoryList.map(function (item) {
            return _react2.default.createElement(Card, { key: item.catagoryName, catagoryName: item.catagoryName, symbolName: item.symbolName });
        })
    );
};

var _default = CatagoryCard;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Col4, 'Col4', 'src/pages/HomePage/components/CatagoryCard.js');
    reactHotLoader.register(Card, 'Card', 'src/pages/HomePage/components/CatagoryCard.js');
    reactHotLoader.register(Row, 'Row', 'src/pages/HomePage/components/CatagoryCard.js');
    reactHotLoader.register(CatagoryCard, 'CatagoryCard', 'src/pages/HomePage/components/CatagoryCard.js');
    reactHotLoader.register(_default, 'default', 'src/pages/HomePage/components/CatagoryCard.js');
    leaveModule(module);
})();

;