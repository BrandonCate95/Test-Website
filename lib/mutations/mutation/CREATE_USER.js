"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var CREATE_USER = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "createUser"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "username"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "sub"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "createUser"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "username"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "sub"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "sub"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "identityId"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "username"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "sub"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "followers"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 177,
    "source": {
      "body": "\n  mutation createUser($username: String!, $sub: String!) {\n    createUser(username: $username, sub: $sub) {\n      identityId\n      username\n      sub\n      followers\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

var _default = CREATE_USER;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CREATE_USER, "CREATE_USER", "src/mutations/mutation/CREATE_USER.js");
  reactHotLoader.register(_default, "default", "src/mutations/mutation/CREATE_USER.js");
  leaveModule(module);
})();

;