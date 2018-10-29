'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UpdatePostPopup = require('../popups/UpdatePostPopup');

var _UpdatePostPopup2 = _interopRequireDefault(_UpdatePostPopup);

var _DeletePostPopup = require('../popups/DeletePostPopup');

var _DeletePostPopup2 = _interopRequireDefault(_DeletePostPopup);

var _UploadPostPopup = require('../popups/UploadPostPopup');

var _UploadPostPopup2 = _interopRequireDefault(_UploadPostPopup);

var _DeleteDraftPopup = require('../popups/DeleteDraftPopup');

var _DeleteDraftPopup2 = _interopRequireDefault(_DeleteDraftPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var PostCRUDPopups = function PostCRUDPopups(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_UpdatePostPopup2.default, {
            postId: props.postId,
            draftGet: true,
            disabled: !props.data.getPost ? true : false
        }),
        _react2.default.createElement(_DeletePostPopup2.default, {
            postId: props.postId,
            disabled: !props.data.getPost ? true : false
        }),
        _react2.default.createElement(_UploadPostPopup2.default, {
            postId: props.postId,
            draftGet: true,
            disabled: props.data.getPost && props.data.getPost.postId ? true : false
        }),
        _react2.default.createElement(_DeleteDraftPopup2.default, {
            postId: props.postId,
            disabled: props.data.getPost && props.data.getPost.postId ? true : false
        })
    );
};

var _default = PostCRUDPopups;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostCRUDPopups, 'PostCRUDPopups', 'src/components/groups/PostCRUDPopups.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/PostCRUDPopups.js');
    leaveModule(module);
})();

;