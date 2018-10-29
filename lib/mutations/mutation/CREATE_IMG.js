"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var CREATE_IMG = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "createImg"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "imgId"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ID"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "visibility"
        }
      },
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "Visibility"
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "file"
        }
      },
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "S3ObjectInput"
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
          "value": "createImg"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "imgId"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "imgId"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "visibility"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "visibility"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "file"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "file"
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
              "value": "imgId"
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
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "file"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "key"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "bucket"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "region"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 260,
    "source": {
      "body": "\n  mutation createImg($imgId: ID!, $visibility: Visibility, $file: S3ObjectInput) {\n    createImg(imgId: $imgId, visibility: $visibility, file: $file) {\n      imgId\n      identityId\n      file{\n          key\n          bucket\n          region\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

var _default = CREATE_IMG;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CREATE_IMG, "CREATE_IMG", "src/mutations/mutation/CREATE_IMG.js");
  reactHotLoader.register(_default, "default", "src/mutations/mutation/CREATE_IMG.js");
  leaveModule(module);
})();

;