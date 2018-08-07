define(['exports', 'react', 'react-router-dom', './components/containers/PrivateRoute', './components/containers/PrivateUserRoute', 'react-loadable', './components/misc/Spinner', './pages/HomePage', './pages/AboutPage', './pages/SearchPage', './pages/PostPage', './pages/AddPostPage', './pages/UserPage', './pages/UserEditPage', './pages/AuthPage'], function (exports, _react, _reactRouterDom, _PrivateRoute, _PrivateUserRoute, _reactLoadable, _Spinner, _HomePage, _AboutPage, _SearchPage, _PostPage, _AddPostPage, _UserPage, _UserEditPage, _AuthPage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

  var _PrivateUserRoute2 = _interopRequireDefault(_PrivateUserRoute);

  var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

  var _Spinner2 = _interopRequireDefault(_Spinner);

  var _HomePage2 = _interopRequireDefault(_HomePage);

  var _AboutPage2 = _interopRequireDefault(_AboutPage);

  var _SearchPage2 = _interopRequireDefault(_SearchPage);

  var _PostPage2 = _interopRequireDefault(_PostPage);

  var _AddPostPage2 = _interopRequireDefault(_AddPostPage);

  var _UserPage2 = _interopRequireDefault(_UserPage);

  var _UserEditPage2 = _interopRequireDefault(_UserEditPage);

  var _AuthPage2 = _interopRequireDefault(_AuthPage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // const Loading = () => <div style={{position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner large primary /></div>

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
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/About', component: _AboutPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/Search', component: _SearchPage2.default }),
        _react2.default.createElement(_PrivateRoute2.default, { path: '/AddPage', component: _AddPostPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/Auth', component: _AuthPage2.default }),
        _react2.default.createElement(_PrivateUserRoute2.default, { path: '/:user/edit', component: _UserEditPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/:user/:page', component: _PostPage2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/:user', component: _UserPage2.default })
      )
    );
  };

  exports.default = App;
});