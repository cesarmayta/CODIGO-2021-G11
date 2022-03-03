import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthService from '../../../services/auth.service';


class Login extends React.Component { 

  constructor(props){
    super(props);
    this.handlerLogin = this.handlerLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username : "",
      password : "",
      loading:false,
      message: ""
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password:e.target.value
    })
  }

  handlerLogin(e){
    e.preventDefault();

    this.setState({
      message:"",
      loading:true
    })

    console.log("usuario : " + this.state.username);
    console.log("password : " + this.state.password);

    AuthService.login(this.state.username,this.state.password).then(
      () => {
        this.props.history.push("/");
        window.location.reload();
      },
      error => {
        const resMessage = "datos incorrectos";
        this.setState({
          loading:false,
          message:resMessage
        })

      }
    )
  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
       <React.Fragment>
            <div className="misc-wrapper">
                <div className="misc-content">
                    <Container>
                    <Row className="justify-content-center">
                        <Col sm="12" md="5" lg="4"  className="col-4">
                        <div to="#javascript" className="misc-header text-center">
                          <Link to="/">
                            <Image alt="" src="/assets/img/icon.png" className="logo-icon margin-r-10" />
                            <Image alt="" src="/assets/img/logo-dark.png" className="toggle-none hidden-xs" />
                          </Link>
                        </div>
                        <div className="misc-box">   
                            <Form onSubmit={this.handlerLogin}>
                            <Form.Group>                                      
                                <label htmlFor="exampleuser1">Username</label>
                                <div className="group-icon">
                                <input 
                                id="exampleuser1" 
                                type="text" 
                                placeholder="Username" 
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                 />
                                <span className="icon-user text-muted icon-input" />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <div className="group-icon">
                                <input id="exampleInputPassword1" 
                                type="password" 
                                placeholder="Password" 
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                 />
                                <span className="icon-lock text-muted icon-input" />
                                </div>
                            </Form.Group>
                            <div className="clearfix">
                                <div className="float-left">
                                <div className="checkbox checkbox-primary margin-r-5">
                                    <input id="checkbox2" type="checkbox" defaultChecked />
                                    <label htmlFor="checkbox2"> Remember Me </label>
                                </div>
                                </div>
                                <div className="float-right">
                                <input type="submit" className="btn btn-block btn-primary btn-rounded box-shadow" value="Login" />
                                </div>
                            </div>
                            <hr />
                            <p className="text-center">Need to Signup?</p>
                            <Link to={`/auth/register`} className="btn btn-block btn-success btn-rounded box-shadow">Register Now</Link>
                            
                            </Form>
                        </div>
                        {this.state.message && (
                          <div className='form-group'>
                            <div className='alert alert-danger' role='alert'>
                              {this.state.message}
                            </div>
                          </div>
                        )}
                        <div className="text-center misc-footer">
                            <p>Copyright © 2020 Ducor</p>
                        </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>

       </React.Fragment>
    );
  }
}

export default Login;