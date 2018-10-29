"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UPDATE_USER_IMG = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {
            "kind": "Name",
            "value": "updateUserImg"
        },
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {
                "kind": "Variable",
                "name": {
                    "kind": "Name",
                    "value": "name"
                }
            },
            "type": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "String"
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
                    "value": "updateUserImg"
                },
                "arguments": [{
                    "kind": "Argument",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "value": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "name"
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
    }],
    "loc": {
        "start": 0,
        "end": 293,
        "source": {
            "body": "\nmutation updateUserImg($name: String, $file: S3ObjectInput) {\n    updateUserImg(\n      name: $name\n      file: $file\n    ){\n        pageImg{\n            file{\n                key\n            }\n        }\n        logoImg{\n            file{\n                key\n            }\n        }\n    }\n  }\n",
            "name": "GraphQL request",
            "locationOffset": {
                "line": 1,
                "column": 1
            }
        }
    }
};

var _default = UPDATE_USER_IMG;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UPDATE_USER_IMG, "UPDATE_USER_IMG", "src/mutations/mutation/UPDATE_USER_IMG.js");
    reactHotLoader.register(_default, "default", "src/mutations/mutation/UPDATE_USER_IMG.js");
    leaveModule(module);
})();

;