'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var UPDATE_POST = {
  'kind': 'Document',
  'definitions': [{
    'kind': 'OperationDefinition',
    'operation': 'mutation',
    'name': {
      'kind': 'Name',
      'value': 'updatePost'
    },
    'variableDefinitions': [{
      'kind': 'VariableDefinition',
      'variable': {
        'kind': 'Variable',
        'name': {
          'kind': 'Name',
          'value': 'postData'
        }
      },
      'type': {
        'kind': 'NonNullType',
        'type': {
          'kind': 'NamedType',
          'name': {
            'kind': 'Name',
            'value': 'PostInput'
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
          'value': 'updatePost'
        },
        'arguments': [{
          'kind': 'Argument',
          'name': {
            'kind': 'Name',
            'value': 'postData'
          },
          'value': {
            'kind': 'Variable',
            'name': {
              'kind': 'Name',
              'value': 'postData'
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
              'value': 'imgKey'
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
    'end': 160,
    'source': {
      'body': '\nmutation updatePost($postData: PostInput!) {\n    updatePost(\n      postData: $postData\n    ){\n      postId\n      identityId\n      title\n      imgKey\n    }\n  }\n',
      'name': 'GraphQL request',
      'locationOffset': {
        'line': 1,
        'column': 1
      }
    }
  }
};

var _default = UPDATE_POST;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UPDATE_POST, 'UPDATE_POST', 'src/mutations/mutation/UPDATE_POST.js');
  reactHotLoader.register(_default, 'default', 'src/mutations/mutation/UPDATE_POST.js');
  leaveModule(module);
})();

;