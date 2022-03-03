import React from 'react';
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Lockscreen extends React.Component { 
  state = {
    hasError: false,
  }

  FormHandler(event){
    event.preventDefault();

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
                        <div className="misc-header text-center">
                          <Link to={`/`}>
                            <Image src="/assets/img/avtar-2.png" classname="rounded-circle center-block margin-b-20 " width="{100}" alt="" />
                          </Link>
                        <p classname="text-center">Please login to unlock your screen.</p>  
                        </div>
                        <div className="misc-box">   
                          <Form onSubmit={(event) => this.FormHandler()}>
                            <Form.Group className="group-icon">
                              <Form.Control id="exampleInputPassword1" type="password" placeholder="Password" />
                              <span classname="icon-lock text-muted icon-input"></span>
                            </Form.Group>
                            <div classname="clearfix">
                              <div classname="float-right">
                                <Button classname="btn-rounded box-shadow" >Unlock</Button>
                              </div>
                            </div>
                          </Form>
                        </div>
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

export default Lockscreen;