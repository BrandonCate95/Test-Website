"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var UPDATE_USER_ATTRIBUTES = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "updateUserAttributes"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "userData"
        }
      },
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "UserInput"
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
          "value": "updateUserAttributes"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "userData"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "userData"
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
              "value": "username"
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
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "description"
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
    "end": 173,
    "source": {
      "body": "\nmutation updateUserAttributes($userData: UserInput) {\n    updateUserAttributes(\n      userData: $userData\n    ){\n      username\n      followers\n      description\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

var _default = UPDATE_USER_ATTRIBUTES;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UPDATE_USER_ATTRIBUTES, "UPDATE_USER_ATTRIBUTES", "src/mutations/mutation/UPDATE_USER_ATTRIBUTES.js");
  reactHotLoader.register(_default, "default", "src/mutations/mutation/UPDATE_USER_ATTRIBUTES.js");
  leaveModule(module);
})();

;