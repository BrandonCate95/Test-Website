'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_USER_DRAFT = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'getUserDraft'
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
          'value': 'getUserDraft'
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
              'value': 'content'
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
          }, {
            'kind': 'Field',
            'name': {
              'kind': 'Name',
              'value': 'imgClass'
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
    'end': 130,
    'source': {
      'body': '\nquery getUserDraft($postId: ID!){\n  getUserDraft(postId: $postId){\n    postId\n    title\n    content\n    imgKey\n    imgClass\n  }\n}',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = GET_USER_DRAFT;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_USER_DRAFT, 'GET_USER_DRAFT', 'src/queries/query/GET_USER_DRAFT.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/GET_USER_DRAFT.js');
  leaveModule(module);
})();

;