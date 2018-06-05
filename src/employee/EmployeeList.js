import React, {Component} from 'react';
import Employee from './Employee';
import EmployeeProfile from './EmployeeProfile';
import AddEmployeeModal from '../AddEmployeeModal';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            employees:this.props.employees,
            queryString: ''
        }
    }
    render() {
        const total = this.getTotalEmployeeCount();
        const active = this.getActiveEmployeeCount();
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="navbar-brand">
                        Employee List of {this.props.departmentName}
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary btn-sm marginTwo">Total <span className="badge">{total}</span></button>
                        <button type="button" className="btn btn-primary btn-sm marginTwo">Active <span className="badge">{active}</span></button>
                    </div>
                    <div>
                        <input className="marginTwo" placeholder="filter employee....." onChange={(event) => this.filterEmployee(event)}/>
                    </div>
                    <table className="table table-bordered">
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
                    </table>
                    <AddEmployeeModal addEmployee={(employee) => this.addEmployee(employee)}/>
                </div>
                <div className="col-sm-6">
                    { this.isEmpty(this.state.employee) ? '' : <EmployeeProfile 
                    employee={this.state.employee} 
                    updateEmployee={(employee) => this.updateEmployee(employee)}/> }
                </div>
            </div>
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
        this.setState({
            employee: employee
        })
    }
    updateEmployee(employee) {
        let employees = this.state.employees;
        let updatedEmployees = employees.map((emp) => {
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
        this.setState({
            employees:updatedEmployees,
            employee: employee
        })
    }
    addEmployee(employee) {
        if(employee.id === '' || employee.name === '') {
            return;
        }
        let employeesList = this.state.employees;
        employeesList.push(employee);
        this.setState({
            employees: employeesList
        })
    }
}

export default EmployeeList;