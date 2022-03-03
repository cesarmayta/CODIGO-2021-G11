import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './layouts'

// auth
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/reset-password';
import LockScreen from './pages/auth/lockscreen';

import * as serviceWorker from './serviceWorker';

import Alumnos from './pages/alumnos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'} >
      <Switch>
          <Route exact path="/auth" render={() => (<Redirect to="/auth/login" />)} /> 
          <Route path={`/auth/login`} component={Login} />
          <Route path={`/auth/register`} component={Register} />
          <Route path={`/auth/forget-password`} component={ResetPassword} />
          <Route path={`/auth/lock-screen`} component={LockScreen} />
      
          <Layout name="backend">
            <Route path={`/alumnos`} component={Alumnos} />
          </Layout>
      </Switch>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
