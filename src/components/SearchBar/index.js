import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

export default function Searchbar() {
    return (
        <div>
        <Form>
            <Form.Group>
            <Form.Control type="search" placeholder="Search"></Form.Control>
            </Form.Group>
        </Form>
        </div>
    );
};