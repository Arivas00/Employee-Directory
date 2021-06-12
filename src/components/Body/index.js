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
        order: "ascending",
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


    searching = (event) => {
        const searchInput = event.target.value;
        const filteredList = this.state.employees.filter((emp) => {
            let name = (emp.name.first + emp.name.last).toLowerCase();
            return name.indexOf(searchInput.toLowerCase()) !== -1;
        });
        this.setState({ filteredEmployees: filteredList });
    }

    sorting = () => {
        const { order } = this.state;
        if (order === "ascending") {
            this.state.filteredEmployees.sort((a, b) => {
                if (a.name.first > b.name.first) {
                    return 1;
                } else {
                    return -1;
                }
            }
            );
            this.setState({ order: "descending" });
        }
        if (order === "descending") {
            this.state.filteredEmployees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return 1;
                } else {
                    return -1;
                }
            }
            );
            this.setState({ order: "ascending" });
        }
    }

    render() {
        return (
            <Container>
                <br></br>
                <Row className="justify-content-center">
                    <Col lg={3}>
                        <Searchbar searching={this.searching} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Tablebody
                        state={this.state}
                        FilteredEmployees={this.state.filteredEmployees}
                        sorting={this.sorting} />
                </Row>
            </Container>
        )
    }
}

