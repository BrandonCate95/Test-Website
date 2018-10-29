'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['flex:0 0 ', ';max-width:', ';flex-direction:column;position:relative;width:100%;margin-left:', ';'], ['flex:0 0 ', ';max-width:', ';flex-direction:column;position:relative;width:100%;margin-left:', ';']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _getKeyWithoutPrefix = require('../../../utilities/getKeyWithoutPrefix');

var _getKeyWithoutPrefix2 = _interopRequireDefault(_getKeyWithoutPrefix);

var _HorizontalCard = require('../../../components/groups/HorizontalCard');

var _HorizontalCard2 = _interopRequireDefault(_HorizontalCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCol = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-11k7xjf-0'
})(_templateObject, function (props) {
    return props.sideBarOpen ? '70%' : '65%';
}, function (props) {
    return props.sideBarOpen ? '70%' : '65%';
}, function (props) {
    return props.sideBarOpen ? '40px' : '200px';
});

var SearchResults = function SearchResults(_ref) {
    var sideBarOpen = _ref.sideBarOpen,
        data = _ref.data;
    return _react2.default.createElement(
        StyledCol,
        { sideBarOpen: sideBarOpen },
        data.searchContent.map(function (item) {
            return _react2.default.createElement(_HorizontalCard2.default, {
                key: item.title,
                imgKey: item.imgKey,
                imgLevel: 'protected',
                identityId: item.identityId,
                title: item.title,
                link: '/' + item.userData.username + '/' + item.postId,
                desc: item.searchDescription,
                author: item.userData.username,
                logoKey: (0, _getKeyWithoutPrefix2.default)(item.userData.logoImg.file.key), zzz: true
            });
        })
    );
};

var _default = SearchResults;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledCol, 'StyledCol', 'src/pages/SearchPage/components/SearchPageResults.js');
    reactHotLoader.register(SearchResults, 'SearchResults', 'src/pages/SearchPage/components/SearchPageResults.js');
    reactHotLoader.register(_default, 'default', 'src/pages/SearchPage/components/SearchPageResults.js');
    leaveModule(module);
})();

;