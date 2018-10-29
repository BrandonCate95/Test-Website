'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var SEARCH_CONTENT = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'searchContent'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'text'
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
          'value': 'searchContent'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'text'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'text'
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
              'value': 'searchDescription'
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
              'value': 'userData'
            },
            'arguments': [],
            'directives': [],
            'selectionSet': {
              'kind': 'SelectionSet',
              'selections': [{
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'username'
                },
                'arguments': [],
                'directives': []
              }, {
                'kind': 'Field',
                'name': {
                  'kind': 'Name',
                  'value': 'logoImg'
                },
                'arguments': [],
                'directives': [],
                'selectionSet': {
                  'kind': 'SelectionSet',
                  'selections': [{
                    'kind': 'Field',
                    'name': {
                      'kind': 'Name',
                      'value': 'file'
                    },
                    'arguments': [],
                    'directives': [],
                    'selectionSet': {
                      'kind': 'SelectionSet',
                      'selections': [{
                        'kind': 'Field',
                        'name': {
                          'kind': 'Name',
                          'value': 'key'
                        },
                        'arguments': [],
                        'directives': []
                      }]
                    }
                  }]
                }
              }]
            }
          }]
        }
      }]
    }
  }],
  'loc': {
    'start': 0,
    'end': 301,
    'source': {
      'body': '\n  query searchContent($text: String!) {\n    searchContent(text: $text) {\n        postId\n        identityId\n        title\n        searchDescription\n        imgKey\n        userData{\n          username\n          logoImg{\n            file{\n              key\n            }\n          }\n        }\n    }\n  }\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = SEARCH_CONTENT;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SEARCH_CONTENT, 'SEARCH_CONTENT', 'src/queries/query/SEARCH_CONTENT.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/SEARCH_CONTENT.js');
  leaveModule(module);
})();

;