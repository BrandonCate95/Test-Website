'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_POST_BY_TITLE = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'getPostByTitle'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'title'
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
          'value': 'getPostByTitle'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'title'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'title'
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
                  'value': 'postID'
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
    'end': 110,
    'source': {
      'body': '\nquery getPostByTitle($title: String!) {\n  getPostByTitle(title: $title){\n    posts{\n      postID\n    }\n  }\n}\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = GET_POST_BY_TITLE;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_POST_BY_TITLE, 'GET_POST_BY_TITLE', 'src/queries/query/GET_POST_BY_TITLE.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/GET_POST_BY_TITLE.js');
  leaveModule(module);
})();

;