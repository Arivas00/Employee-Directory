import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';


export default function Header() {
    return (
        <div className="heading">
            <Row>
                <h1 className="title">Employee Directory</h1>
            </Row>
            <Row>
                <p>Welcome to your employee directory.</p>
            </Row>
            <Row>
                <p>You can use the search bar to find people by name or click name category to sort by name.</p>
            </Row>
        </div>

    )
};