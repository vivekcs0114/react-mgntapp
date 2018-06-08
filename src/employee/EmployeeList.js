import React, {Component} from 'react';
import Employee from './Employee';
import EmployeeProfile from './EmployeeProfile';
import AddEmployeeModal from '../AddEmployeeModal';
import { Row, Col, Table } from 'reactstrap';
import axios from 'axios';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            employees:this.props.employees,
            queryString: '',
            department: this.props.department
        }
    }
    render() {
        const total = this.getTotalEmployeeCount();
        const active = this.getActiveEmployeeCount();
        return (
            <Row>
                <Col sm="6">
                    <div className="navbar-brand">
                        Employee List of {this.props.department.name}
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary btn-sm marginTwo">Total <span className="badge">{total}</span></button>
                        <button type="button" className="btn btn-primary btn-sm marginTwo">Active <span className="badge">{active}</span></button>
                    </div>
                    <div>
                        <input className="marginTwo" placeholder="filter employee....." onChange={(event) => this.filterEmployee(event)}/>
                    </div>
                    <Table bordered>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.applyFilter(this.state.queryString).map(employee => 
                        <Employee 
                        key={employee.id}
                        employee={employee} 
                        getEmployee={(employee) => this.getEmployee(employee)}/>)
                    }
                    </tbody>
                    </Table>
                    <AddEmployeeModal addEmployee={(employee) => this.addEmployee(employee)}/>
                </Col>
                <Col sm="6">
                    { this.isEmpty(this.state.employee) ? '' : <EmployeeProfile 
                    employee={this.state.employee} 
                    updateEmployee={(employee) => this.updateEmployee(employee)}/> }
                </Col>
            </Row>
        )
    }
    getTotalEmployeeCount() {
        return this.state.employees.length;
    }
    getActiveEmployeeCount() {
        let active = 0;
        this.state.employees.forEach((employee) => {
            if(employee.active) {
                active = active + 1;
            }
        })
        return active;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            employees: nextProps.employees            
        })
    }
    applyFilter = (query) => {
        return this.state.employees.filter((employee) =>
          employee.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }
    filterEmployee(event) {
        let query = event.target.value;
        this.setState({
            queryString: query
        });
    }
    isEmpty(obj) { 
        for ( var prop in obj ) { 
          return false; 
        } 
        return true; 
    }
    getEmployee(employee) {
        axios.get('http://localhost:8080/employees/'+employee.id)
        .then(res => {
            this.setState({ 
                employee: res.data
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    updateEmployee(employee) {
        let self = this;
        let updatedEmployees = this.state.employees.map((emp) => {
            if (emp.id === employee.id) {
                return {
                    name: employee.name,
                    address: employee.address,
                    id: employee.id,
                    active: employee.active
                }
            } else {
                return emp;
            }
        });
        axios.put('http://localhost:8080/employees/'+employee.id, employee)
        .then(function (response) {
            self.setState({
                employee: response.data,
                employees: updatedEmployees
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    addEmployee(employee) {
        if(employee.name === '') {
            return;
        }
        let employeesList = this.state.employees;
        let self = this;
        axios.post('http://localhost:8080/employees/departments/'+this.state.department.id, employee)
        .then(function (response) {
            employeesList.push(response.data);
            self.setState({
                employees: employeesList
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default EmployeeList;