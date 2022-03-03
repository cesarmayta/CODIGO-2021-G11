import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Form , Image} from 'react-bootstrap';

class Register extends React.Component { 

  state = {
    hasError: false,
  }

  FormHandler(event){
    //event.preventDefault();

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
                  <div className="col-4">
                    <div className="misc-header text-center">
                      <Link to="/">
                        <Image alt="" src="/assets/img/icon.png" className="logo-icon margin-r-10" />
                        <Image alt="" src="/assets/img/logo-dark.png" className="toggle-none hidden-xs" />
                      </Link>
                    </div>
                    <div className="misc-box">   
                      <p className="text-center">Sign up to get instant access.</p>
                      <Form onSubmit={(event)=> this.FormHandler() } action={`/`}>
                        <Form.Group>
                          <label htmlFor="eampleuser1">Email Id</label>
                          <div className="group-icon">
                            <input id="eampleuser1" type="text" placeholder="Enter Email" className="form-control" />
                            <span className="icon-envelope text-muted icon-input" />
                          </div>
                        </Form.Group>
                        <Form.Group className="group-icon">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <div className="group-icon">
                            <input id="exampleInputPassword1" type="password" placeholder="Password" className="form-control" />
                            <span className="icon-lock text-muted icon-input" />
                          </div>
                        </Form.Group>
                        <Form.Group className="group-icon">
                          <label htmlFor="exampleInputPassword2">Confirm Password</label>
                          <div className="group-icon">
                            <input id="exampleInputPassword2" type="password" placeholder="Confirm Password" className="form-control" />
                            <span className="icon-lock text-muted icon-input" />
                          </div>
                        </Form.Group>
                        <div className="clearfix">
                          <div className="float-left">
                            <div className="checkbox checkbox-primary margin-r-5">
                              <input id="checkbox2" type="checkbox" defaultChecked />
                              <label htmlFor="checkbox2"> I Agree with Terms <Link to="/terms">Terms</Link> </label>
                            </div> 
                          </div>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary btn-rounded box-shadow mt-10">Register Now</button>
                        <hr />
                        <p className=" text-center">Have an account?</p>
                        <Link to={'/auth/login'} className="btn btn-block btn-success btn-rounded box-shadow">Login</Link>
                      </Form>
                    </div>
                    <div className="text-center">
                      <p>Copyright © 2020 Ducor</p>
                    </div>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
       </React.Fragment>
    );
  }
}

export default Register;