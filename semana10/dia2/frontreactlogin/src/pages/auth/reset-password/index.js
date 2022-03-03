import React from 'react';
import { Container, Row, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ResetPassword extends React.Component { 
  state = {
    hasError: false,
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
                        <div className="misc-box">
                            <h3 className="text-center">
                              <small>Reset Password</small>
                            </h3>
                            <Alert className="alert-info">
                              <p className>Enter your e-mail below and we will send you reset instructions!</p>
                            </Alert>
                            <Form action={`/`}>
                            <Form.Group className="group-icon">
                              <input id="emailid" type="password" placeholder="Enter Email" className="form-control" />
                              <span className="icon-envelope text-muted icon-input" />
                            </Form.Group>
                            <div className="clearfix">
                                <Link to={`/`} className="btn btn-block btn-rounded box-shadow btn-primary">Send me new password</Link>
                            </div>
                            </Form>
                        </div>
                        <div className="text-center misc-footer">
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

export default ResetPassword;