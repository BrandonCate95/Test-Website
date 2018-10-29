'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_ES_POST = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'query',
    'name': {
      'kind': 'Name',
      'value': 'getESPost'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'id'
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
          'value': 'getESPost'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'id'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'id'
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
              'value': 'identityId'
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
    'end': 218,
    'source': {
      'body': '\nquery getESPost($id: ID!) {\n  getESPost(id: $id){\n    identityId\n    imgKey\n    imgClass\n    title\n    content\n    userData{\n      username\n      logoImg{\n        file{\n          key\n        }\n      }\n    }    \n  }\n}\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = GET_ES_POST;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_ES_POST, 'GET_ES_POST', 'src/queries/query/GET_ES_POST.js');
  reactHotLoader.register(_default, 'default', 'src/queries/query/GET_ES_POST.js');
  leaveModule(module);
})();

;