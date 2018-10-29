'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _templateObject = _taggedTemplateLiteral(['margin-top:10px;padding:0 16px;text-transform:uppercase !important;'], ['margin-top:10px;padding:0 16px;text-transform:uppercase !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var catagoryData = [{ catagoryName: "test", symbolName: "favorite" }, { catagoryName: "billy", symbolName: "casino" }, { catagoryName: "friend", symbolName: "fitness_center" }];

var SearchSideBarCatagory = function SearchSideBarCatagory(props) {
    return _react2.default.createElement(
        _Link3.default,
        { to: '/Search?q=' + props.catagoryName,
            className: 'mdc-list-item mdc-theme-neutral'
        },
        _react2.default.createElement(
            'span',
            { style: { marginLeft: "16px" } },
            '#',
            props.catagoryName
        )
    );
};

var HeaderContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-6mkef8-0'
})(_templateObject);

//this is only for testing purposes not actually data passed or retrieved yet
var SearchSideBarCatagoryList = function SearchSideBarCatagoryList() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            HeaderContainer,
            {
                className: 'mdc-typography--subtitle1'
            },
            'Trending'
        ),
        catagoryData.map(function (catagory) {
            return _react2.default.createElement(SearchSideBarCatagory, {
                key: catagory.catagoryName,
                symbolName: catagory.symbolName,
                catagoryName: catagory.catagoryName
            });
        })
    );
};

var _default = SearchSideBarCatagoryList;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(catagoryData, 'catagoryData', 'src/components/groups/SideBarCatagoryList.js');
    reactHotLoader.register(SearchSideBarCatagory, 'SearchSideBarCatagory', 'src/components/groups/SideBarCatagoryList.js');
    reactHotLoader.register(HeaderContainer, 'HeaderContainer', 'src/components/groups/SideBarCatagoryList.js');
    reactHotLoader.register(SearchSideBarCatagoryList, 'SearchSideBarCatagoryList', 'src/components/groups/SideBarCatagoryList.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/SideBarCatagoryList.js');
    leaveModule(module);
})();

;