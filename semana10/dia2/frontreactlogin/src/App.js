import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layouts'
// auth
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/reset-password';
import LockScreen from './pages/auth/lockscreen';
import Alumnos from './pages/alumnos';

import AuthService from "./services/auth.service";

class App extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        currentUser : undefined,
      }
    }
  
    componentDidMount(){
      const user = AuthService.getCurrentUser();
  
      if(user){
        this.setState({
          currentUser:user
        })
      }
    }
  
    render() {
      const {currentUser} = this.state;
  
      return(
        <BrowserRouter>
        {currentUser ? (
            <Switch>
                <Layout name="backend">
                  <Route path={`/alumnos`} component={Alumnos} />
                </Layout>
            </Switch>
        ) : (
            <Switch>
                <Route exact path="/auth" render={() => (<Redirect to="/auth/login" />)} /> 
                <Route path={`/auth/login`} component={Login} />
                <Route path={`/auth/register`} component={Register} />
                <Route path={`/auth/forget-password`} component={ResetPassword} />
                <Route path={`/auth/lock-screen`} component={LockScreen} />
            
                <Redirect to="/auth/login" />
            </Switch>
        )}
        </BrowserRouter>
      )
  
    }
  }

  export default App;