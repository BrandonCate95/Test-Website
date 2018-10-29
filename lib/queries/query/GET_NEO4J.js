'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_NEO4J = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'getNeo4j'
    },
    'variableDefinitions': [],
    'directives': [],
    'selectionSet': {
      'kind': 'SelectionSet',
      'selections': [{
        'kind': 'Field',
        'name': {
          'kind': 'Name',
          'value': 'getNeo4j'
        },
        'arguments': [],
        'directives': [],
        'selectionSet': {
          'kind': 'SelectionSet',
          'selections': [{
            'kind': 'Field',
            'name': {
              'kind': 'Name',
              'value': 'neo4j'
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
                  'value': 'title'
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
    'end': 78,
    'source': {
      'body': '\nquery getNeo4j {\n  getNeo4j{\n    neo4j{\n      postId\n      title\n    }\n  }\n}\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = GET_NEO4J;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_NEO4J, 'GET_NEO4J', 'src/queries/query/GET_NEO4J.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/GET_NEO4J.js');
  leaveModule(module);
})();

;