'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var LIST_USER_DRAFTS = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'listUserDrafts'
    },
    'variableDefinitions': [],
    'directives': [],
    'selectionSet': {
      'kind': 'SelectionSet',
      'selections': [{
        'kind': 'Field',
        'name': {
          'kind': 'Name',
          'value': 'listUserDrafts'
        },
        'arguments': [],
        'directives': [],
        'selectionSet': {
          'kind': 'SelectionSet',
          'selections': [{
            'kind': 'Field',
            'name': {
              'kind': 'Name',
              'value': 'drafts'
            },
            'arguments': [],
            'directives': [],
            'selectionSet': {
              'kind': 'SelectionSet',
              'selections': [{
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'postId'
                },
                'arguments': [],
                'directives': []
              }, {
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'identityId'
                },
                'arguments': [],
                'directives': []
              }, {
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'title'
                },
                'arguments': [],
                'directives': []
              }, {
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'imgKey'
                },
                'arguments': [],
                'directives': []
              }]
            }
          }]
        }
      }]
    }
  }],
  'loc': {
    'start': 0,
    'end': 120,
    'source': {
      'body': '\nquery listUserDrafts{\n  listUserDrafts{\n    drafts{\n      postId\n      identityId\n      title\n      imgKey\n    }\n  }\n}\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = LIST_USER_DRAFTS;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LIST_USER_DRAFTS, 'LIST_USER_DRAFTS', 'src/queries/query/LIST_USER_DRAFTS.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/LIST_USER_DRAFTS.js');
  leaveModule(module);
})();

;