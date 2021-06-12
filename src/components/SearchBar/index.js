import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

export default function Searchbar(props) {
    return (
        <div>
        <Form>
            <Form.Control type="search" placeholder="Search" onChange={props.searching}></Form.Control>
        </Form>
        </div>
    );
};