"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var UPDATE_DRAFT = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "updateDraft"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "draftData"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "DraftInput"
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
          "value": "updateDraft"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "draftData"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "draftData"
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
              "value": "postId"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "identityId"
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
    "end": 132,
    "source": {
      "body": "\n  mutation updateDraft($draftData: DraftInput!) {\n    updateDraft(draftData: $draftData) {\n      postId\n      identityId\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

var _default = UPDATE_DRAFT;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UPDATE_DRAFT, "UPDATE_DRAFT", "src/mutations/mutation/UPDATE_DRAFT.js");
  reactHotLoader.register(_default, "default", "src/mutations/mutation/UPDATE_DRAFT.js");
  leaveModule(module);
})();

;