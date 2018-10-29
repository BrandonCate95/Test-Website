'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var DELETE_DRAFT = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'mutation',
    'name': {
      'kind': 'Name',
      'value': 'deleteDraft'
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
          'value': 'deleteDraft'
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
    'end': 107,
    'source': {
      'body': '\nmutation deleteDraft($postId: ID!) {\n    deleteDraft(\n      postId: $postId\n    ){\n      postId\n    }\n  }\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = DELETE_DRAFT;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DELETE_DRAFT, 'DELETE_DRAFT', 'src/mutations/mutation/DELETE_DRAFT.js');
  reactHotLoader.register(_default, 'default', 'src/mutations/mutation/DELETE_DRAFT.js');
  leaveModule(module);
})();

;