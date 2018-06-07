import React, {Component} from 'react';
import Department from './Department';
import EmployeeList from '../employee/EmployeeList';
import AddDepartmentModal from '../AddDepartmentModal'
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';

class DepartmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments:[],
            employees:[],
            department:{}
        }
    }
    render() {
        return (
          <Container>
            <Row>
              <Col sm="4">
                <span className="navbar-brand">
                  Department List
                </span>
                <Table bordered>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.departments.map(department => 
                  <Department 
                  key={department.id}
                  department={department} 
                  getDepartmentEmployee={(department) => this.getDepartmentEmployee(department)}/>)
                }
                </tbody>
                </Table>
                <AddDepartmentModal addDepartment={(department) => this.addDepartment(department)}/>
              </Col>
              <Col sm="8">
                { this.isEmpty(this.state.employees) ? '' : <EmployeeList department={this.state.department} employees={this.state.employees} /> }
              </Col>
            </Row>
          </Container>
        )
    }
    isEmpty(obj) { 
      for ( var prop in obj ) { 
        return false; 
      } 
      return true; 
    }
    getDepartmentEmployee(department) {
      axios.get('http://localhost:8080/employees/departments/'+department.id)
      .then(res => {
        this.setState({ 
          employees: res.data,
          department:department
        });
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    addDepartment(department){
      if(department.name === '') {
        return;
      }
      let departmentsList = this.state.departments;
      let self = this;
      axios.post('http://localhost:8080/departments', department)
      .then(function (response) {
        departmentsList.push(response.data);
        self.setState({
            departments: departmentsList
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    componentDidMount() {
      axios.get('http://localhost:8080/departments')
      .then(res => {
        this.setState({ 
          departments : res.data 
        });
      })
      .catch((error)=>{
        console.log(error);
      });
    }
}

export default DepartmentList;