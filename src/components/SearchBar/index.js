import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

export default function Searchbar() {
    return (
        <Form>
            <Form.Group>
            <Form.Control size="lg" type="search" placeholder="Search"></Form.Control>
            </Form.Group>
        </Form>
    );
};