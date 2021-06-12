import React from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'moment';


export default function Tablebody(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.id.value}>
                    <td>
                        <img
                            src={employee.picture.thumbnail}
                            alt={employee.name.last}
                        />
                    </td>
                    <td>{employee.name.first + " " + employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td><a href="#">{employee.email}</a></td>
                    <td>{Moment(employee.dob.date).format('L')}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};