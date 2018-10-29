'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var addPageInitialState = {
    postId: '',
    title: '',
    showTitle: false,
    username: 'anon',
    content: '',
    imgId: 'froalaImgEditor1',
    imgKey: '#',
    imgClass: 'fr-view fr-fil fr-dib',
    notes: '',

    preview: false,
    saveLoading: false,
    titleCheck: false,
    titleCheckUserMatch: false,

    s3Hash: {}
};

var addpage = function addpage() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : addPageInitialState;
    var action = arguments[1];

    switch (action.type) {
        case 'RESTORE_STATE':
            return Object.assign({}, state, action.payload.addpage);
        case 'UPDATE_ADD_PAGE_CACHE':
            return Object.assign({}, state, action.payload);
        case 'SET_S3_HASH':
            return Object.assign({}, state, {
                s3Hash: action.s3Hash
            });
        default:
            return state;
    }
};

var _default = addpage;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(addPageInitialState, 'addPageInitialState', 'src/reducers/addpage.js');
    reactHotLoader.register(addpage, 'addpage', 'src/reducers/addpage.js');
    reactHotLoader.register(_default, 'default', 'src/reducers/addpage.js');
    leaveModule(module);
})();

;