import  React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';
import createHistory from "history/createBrowserHistory";

import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

const history = createHistory()

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in or up', user);
    <Route><Redirect to="/app"/></Route>
  } else {
    console.log('user has signed out or still needs to sign in', user);
    history.replace('/signin');
  }
})

ReactDOM.render(
  <BrowserRouter path="/">
    <div>
      <Route path="/app" component={App} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </div>
  </BrowserRouter>, document.getElementById('root')
)
