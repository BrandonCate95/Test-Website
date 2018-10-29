'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch2 = require('react-router-dom/Switch');

var _Switch3 = _interopRequireDefault(_Switch2);

var _Route2 = require('react-router-dom/Route');

var _Route3 = _interopRequireDefault(_Route2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PrivateUserRoute = require('./components/containers/PrivateUserRoute');

var _PrivateUserRoute2 = _interopRequireDefault(_PrivateUserRoute);

var _HomePage = require('./pages/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = require('./pages/AboutPage');

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _SearchPage = require('./pages/SearchPage');

var _SearchPage2 = _interopRequireDefault(_SearchPage);

var _PostPage = require('./pages/PostPage');

var _PostPage2 = _interopRequireDefault(_PostPage);

var _AddPostPage = require('./pages/AddPostPage');

var _AddPostPage2 = _interopRequireDefault(_AddPostPage);

var _UserPage = require('./pages/UserPage');

var _UserPage2 = _interopRequireDefault(_UserPage);

var _UserEditPage = require('./pages/UserEditPage');

var _UserEditPage2 = _interopRequireDefault(_UserEditPage);

var _AuthPage = require('./pages/AuthPage');

var _AuthPage2 = _interopRequireDefault(_AuthPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

// import Loadable from 'react-loadable'
// import Spinner from './components/misc/Spinner'

// const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner large primary /></div>

// const PrivateUserRoute = Loadable({
//   loader: () => import('./components/containers/PrivateUserRoute'),
//   loading: Loading,
// })

// const Home = Loadable({
//   loader: () => import('./pages/HomePage'),
//   loading: Loading,
// })

// const About = Loadable({
//   loader: () => import('./pages/AboutPage'),
//   loading: Loading,
// })

// const Search = Loadable({
//   loader: () => import('./pages/SearchPage'),
//   loading: Loading,
// })

// const Post = Loadable({
//   loader: () => import('./pages/PostPage'),
//   loading: Loading,
// })

// const Add = Loadable({
//   loader: () => import('./pages/AddPostPage'),
//   loading: Loading,
// })

// const User = Loadable({
//   loader: () => import('./pages/UserPage'),
//   loading: Loading,
// })

// const UserEdit = Loadable({
//   loader: () => import('./pages/UserEditPage'),
//   loading: Loading,
// })

// const Auth = Loadable({
//   loader: () => import('./pages/AuthPage'),
//   loading: Loading,
// })

var App = function App() {
  return _react2.default.createElement(
    _Switch3.default,
    null,
    _react2.default.createElement(_Route3.default, { exact: true, path: '/', component: _HomePage2.default }),
    _react2.default.createElement(_Route3.default, { exact: true, path: '/About', component: _AboutPage2.default }),
    _react2.default.createElement(_Route3.default, { path: '/Search', component: _SearchPage2.default }),
    _react2.default.createElement(_Route3.default, { path: '/AddPage', component: _AddPostPage2.default }),
    _react2.default.createElement(_Route3.default, { path: '/Auth', component: _AuthPage2.default }),
    _react2.default.createElement(_PrivateUserRoute2.default, { path: '/:user/edit', component: _UserEditPage2.default }),
    _react2.default.createElement(_Route3.default, { path: '/:user/:page', component: _PostPage2.default }),
    _react2.default.createElement(_Route3.default, { path: '/:user', component: _UserPage2.default })
  );
};

function chooseHot(comp) {
  if (module.hot) {
    var hot = require('react-hot-loader').hot;
    return hot(module)(comp);
  } else return comp;
}

var _default = chooseHot(App);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'src/App.js');
  reactHotLoader.register(chooseHot, 'chooseHot', 'src/App.js');
  reactHotLoader.register(_default, 'default', 'src/App.js');
  leaveModule(module);
})();

;