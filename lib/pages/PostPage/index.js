'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GetESPost = require('../../queries/components/GetESPost');

var _GetESPost2 = _interopRequireDefault(_GetESPost);

var _PostPageWithQuery = require('./components/PostPageWithQuery');

var _PostPageWithQuery2 = _interopRequireDefault(_PostPageWithQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var PostPageContainer = function PostPageContainer(_ref) {
    var match = _ref.match;
    return _react2.default.createElement(
        _GetESPost2.default,
        {
            postId: match.params.page
        },
        _react2.default.createElement(_PostPageWithQuery2.default, null)
    );
};

var _default = PostPageContainer;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostPageContainer, 'PostPageContainer', 'src/pages/PostPage/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/PostPage/index.js');
    leaveModule(module);
})();

;