import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Searchbar from '../Searchbar';
import Tablebody from '../Tablebody';
import './style.css';
import API from "../../utils/API"


export default class Body extends Component {
    state = {
        employees: [],
        filteredEmployees: [],
        results: [],
        error: ""
    }

    componentDidMount() {
        API.employeeList()
            .then(res => {
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results
                });
            })
            .catch(err => console.log(err));
    }


    render() {
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
                    <Tablebody 
                    employees={this.state.filteredEmployees}/>
                </Row>
            </Container>
        )
    }
}

