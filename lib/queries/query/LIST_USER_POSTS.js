'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_POST = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'listUserPosts'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'identityId'
        }
      },
      'type': {
        'kind': 'NonNullType',
        'type': {
          'kind': 'NamedType',
          'name': {
            'kind': 'Name',
            'value': 'String'
          }
        }
      }
    }],
    'directives': [],
    'selectionSet': {
      'kind': 'SelectionSet',
      'selections': [{
        'kind': 'Field',
        'name': {
          'kind': 'Name',
          'value': 'listUserPosts'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'identityId'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'identityId'
            }
          }
        }],
        'directives': [],
        'selectionSet': {
          'kind': 'SelectionSet',
          'selections': [{
            'kind': 'Field',
            'name': {
              'kind': 'Name',
              'value': 'posts'
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
    'end': 165,
    'source': {
      'body': '\nquery listUserPosts($identityId: String!) {\n  listUserPosts(identityId: $identityId){\n    posts{\n      postId\n      identityId\n      title\n      imgKey\n    }\n  }\n}\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = GET_POST;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_POST, 'GET_POST', 'src/queries/query/LIST_USER_POSTS.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/LIST_USER_POSTS.js');
  leaveModule(module);
})();

;