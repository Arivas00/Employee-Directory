import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Searchbar from '../Searchbar';
import Tablebody from '../Tablebody';
import './style.css';

export default function Body() {
    return (
        <Container>
            <br></br>
            <Row className="justify-content-center">
                <Col lg={3}>
                    <Searchbar />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Tablebody />
            </Row>
        </Container>
    )
}

