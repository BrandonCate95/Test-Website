'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SideBarCatagoryList = require('../../../components/groups/SideBarCatagoryList');

var _SideBarCatagoryList2 = _interopRequireDefault(_SideBarCatagoryList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var PostPageSideBarContent = function PostPageSideBarContent() {
    return _react2.default.createElement(_SideBarCatagoryList2.default, null);
};

var _default = PostPageSideBarContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostPageSideBarContent, 'PostPageSideBarContent', 'src/pages/PostPage/components/PostPageSideBarContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/PostPage/components/PostPageSideBarContent.js');
    leaveModule(module);
})();

;