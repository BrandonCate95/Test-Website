import "babel-register"
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PrivateRoute from './components/containers/PrivateRoute'
import PrivateUserRoute from './components/containers/PrivateUserRoute'
import Loadable from 'react-loadable'
import Spinner from './components/misc/Spinner'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Search from './pages/SearchPage'
import Post from './pages/PostPage'
import Add from './pages/AddPostPage'
import User from './pages/UserPage'
import UserEdit from './pages/UserEditPage'
import Auth from './pages/AuthPage'

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

const App = () => (  
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route path="/Search" component={Search} />
      <PrivateRoute path="/AddPage" component={Add} />
      <Route path="/Auth" component={Auth} />
      <PrivateUserRoute path="/:user/edit" component={UserEdit} />
      <Route path="/:user/:page" component={Post} />
      <Route path="/:user" component={User} />     
    </Switch>
  </Router>    
)

export default App
