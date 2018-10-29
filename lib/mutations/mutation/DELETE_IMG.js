"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var DELETE_IMG = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {
            "kind": "Name",
            "value": "deleteImg"
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
        }],
        "directives": [],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {
                    "kind": "Name",
                    "value": "deleteImg"
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
                            "value": "visibility"
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
        "end": 208,
        "source": {
            "body": "\n  mutation deleteImg($imgId: ID!) {\n    deleteImg(imgId: $imgId) {\n        imgId\n        identityId\n        visibility\n        file{\n            key\n            bucket\n            region\n        }\n    }\n  }\n",
            "name": "GraphQL request",
            "locationOffset": {
                "line": 1,
                "column": 1
            }
        }
    }
};

var _default = DELETE_IMG;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DELETE_IMG, "DELETE_IMG", "src/mutations/mutation/DELETE_IMG.js");
    reactHotLoader.register(_default, "default", "src/mutations/mutation/DELETE_IMG.js");
    leaveModule(module);
})();

;