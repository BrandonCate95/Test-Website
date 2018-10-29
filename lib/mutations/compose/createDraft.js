'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactApollo = require('react-apollo');

var _CREATE_DRAFT = require('../mutation/CREATE_DRAFT');

var _CREATE_DRAFT2 = _interopRequireDefault(_CREATE_DRAFT);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _default = (0, _reactApollo.graphql)(_CREATE_DRAFT2.default, {
    props: function props(_props) {
        return {
            createDraft: function createDraft(draftData) {
                _props.mutate({
                    variables: { draftData: draftData }
                });
            }
        };
    },
    options: {
        ssr: false,
        update: function update(cache, _ref) {
            var createDraft = _ref.data.createDraft;

            var data = cache.readQuery({ query: LIST_USER_DRAFTS });

            data.listUserDrafts.drafts = [].concat(_toConsumableArray(data.listUserDrafts.drafts.filter(function (draft) {
                return draft.postId !== createDraft.postId;
            })), [createDraft]);

            cache.writeQuery({
                query: LIST_USER_DRAFTS,
                data: data
            });
        }
    }
});

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'src/mutations/compose/createDraft.js');
    leaveModule(module);
})();

;