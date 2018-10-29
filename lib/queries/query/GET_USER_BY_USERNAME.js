"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GET_USER_BY_USERNAME = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "getUserByUsername"
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
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "getUserByUsername"
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
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "users"
            },
            "arguments": [],
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
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "logoImg"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
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
                          "value": "region"
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
                          "value": "key"
                        },
                        "arguments": [],
                        "directives": []
                      }]
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "pageImg"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
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
                          "value": "region"
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
                          "value": "key"
                        },
                        "arguments": [],
                        "directives": []
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
  "loc": {
    "start": 0,
    "end": 383,
    "source": {
      "body": "\nquery getUserByUsername($username: String!) {\n  getUserByUsername(\n      username: $username\n  ){\n    users {\n      identityId\n      username\n      followers\n      description\n      logoImg {\n        file {\n          region\n          bucket\n          key\n        }\n      }\n      pageImg {\n        file {\n          region\n          bucket\n          key\n        }\n      }\n    }\n  }\n}\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

var _default = GET_USER_BY_USERNAME;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GET_USER_BY_USERNAME, "GET_USER_BY_USERNAME", "src/queries/query/GET_USER_BY_USERNAME.js");
  reactHotLoader.register(_default, "default", "src/queries/query/GET_USER_BY_USERNAME.js");
  leaveModule(module);
})();

;