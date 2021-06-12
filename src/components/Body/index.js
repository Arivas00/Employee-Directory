import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Searchbar from '../Searchbar';
import Tablebody from '../Tablebody';

export default function Body() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs className="">
                    <Searchbar />
                </Col>
            </Row>
            <Row>
                <Tablebody />
            </Row>
        </Container>
    )
}

