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
      'value': 'getPost'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'postId'
        }
      },
      'type': {
        'kind': 'NonNullType',
        'type': {
          'kind': 'NamedType',
          'name': {
            'kind': 'Name',
            'value': 'ID'
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
          'value': 'getPost'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'postId'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'postId'
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
              'value': 'postId'
            },
            'arguments': [],
            'directives': []
          }]
        }
      }]
    }
  }],
  'loc': {
    'start': 0,
    'end': 76,
    'source': {
      'body': '\nquery getPost($postId: ID!) {\n  getPost(postId: $postId){\n    postId\n  }\n}\n',
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

  reactHotLoader.register(GET_POST, 'GET_POST', 'src/queries/query/GET_POST.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/GET_POST.js');
  leaveModule(module);
})();

;