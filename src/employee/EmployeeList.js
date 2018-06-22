import React, {Component} from 'react';
import Employee from './Employee';
import AddEmployeeModal from '../AddEmployeeModal';
import { Container, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchEmployeeList, fetchDepartmentEmployees } from '../actions/employeeActions';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            queryString: '',
            department: {}
        }
    }
    render() {
        let total = 0;
        let active = 0;
        if(this.props.employee) {
            total = this.getTotalEmployeeCount();
            active = this.getActiveEmployeeCount();
        }
        
        return (
            <Container>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <span className="navbar-brand">
                  Employee List
                </span>
                    <div className="navbar-brand">
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
                        this.props && this.props.employee ?
                        this.applyFilter(this.state.queryString).map(employee => 
                        <Employee 
                        key={employee.id}
                        employee={employee} 
                        getEmployee={(employee) => this.getEmployee(employee)}/>) : null
                    }
                    </tbody>
                    </Table>
                    <AddEmployeeModal />
                </Col>
            </Row>
            </Container>
        )
    }
    getTotalEmployeeCount() {
        return this.props.employee.length;
    }
    getActiveEmployeeCount() {
        let active = 0;
        this.props.employee.forEach((emp) => {
            if(emp.active) {
                active = active + 1;
            }
        })
        return active;
    }
    applyFilter = (query) => {
        return this.props.employee.filter((emp) =>
          emp.name.toLowerCase().indexOf(query.toLowerCase()) > -1
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

    componentWillMount() {
        let id = this.props.match.params.depId;
        if(id) {
            this.props.dispatch(fetchDepartmentEmployees(id));
        } else {
            this.props.dispatch(fetchEmployeeList());
        }
    }
}

function mapStateToProps(state) {
    return state = {
        employee: state.employee.employee
    };
}

export default connect(mapStateToProps)(EmployeeList);