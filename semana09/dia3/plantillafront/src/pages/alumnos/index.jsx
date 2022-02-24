import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table } from 'react-bootstrap';


class Alumnos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Listado de Alumnos
                        </Card.Header>
                        <Card.Body>
                        <Table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cesar mayta</td>
                                <td>cesarmayta@gmail.com</td>
                            </tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Alumnos;
