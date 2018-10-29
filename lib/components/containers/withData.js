'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextApolloAppsync = require('next-apollo-appsync');

var _AppSync = require('../../AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var config = {
  url: _AppSync2.default.graphqlEndpoint,
  region: _AppSync2.default.region,
  auth: {
    type: _AppSync2.default.authenticationType,
    apiKey: _AppSync2.default.apiKey
  }
};

var _default = (0, _nextApolloAppsync.withAppSyncData)(config);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, 'config', 'src/components/containers/withData.js');
  reactHotLoader.register(_default, 'default', 'src/components/containers/withData.js');
  leaveModule(module);
})();

;