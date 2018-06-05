import React, {Component} from 'react';
import Department from './Department';
import EmployeeList from '../employee/EmployeeList';

class DepartmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [
                {
                  name: "Computer Science",
                  id: 101,
                  employees: [
                    {
                      name: "Peter",
                      id: 111,
                      address: "Baner, pune",
                      active: true
                    },
                    {
                      name: "Jerry",
                      id: 112,
                      address: "Pashan, pune",
                      active: false          
                    },
                    {
                      name: "Mike",
                      id: 113,
                      address: "Hinjewadi, pune" ,
                      active: true       
                    }
                ]
                },
                {
                  name: "Electronics",
                  id: 102,
                  employees: [
                    {
                      name: "Sodi",
                      id: 114,
                      address: "Panjab",
                      active: true
                    },
                    {
                      name: "Seva",
                      id: 115,
                      address: "Mumbai" ,
                      active: true         
                    },
                    {
                      name: "Kane",
                      id: 116,
                      address: "Japan",
                      active: true        
                    }
                ]          
                },
                {
                  name: "Information Technology",
                  id: 103,
                  employees: [
                    {
                      name: "John",
                      id: 117,
                      address: "Kothrud, pune",
                      active: false
                    },
                    {
                      name: "Jerry",
                      id: 118,
                      address: "Pashan, pune",
                      active: true          
                    },
                    {
                      name: "Mike",
                      id: 119,
                      address: "Hinjewadi, pune",
                      active: false        
                    }
                ]        
                }
            ],
            employees:[],
            departmentName:''
        }
    }
    render() {
        return (
            <div className="row container-fluid">
            <div className="col-sm-4">
            <div className="navbar-brand">
              Department List
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
              this.state.departments.map(department => 
              <Department 
              key={department.id}
              department={department} 
              getDepartmentEmployee={(department) => this.getDepartmentEmployee(department)}/>)
            }
            </tbody>
            </table>
            </div>
            <div className="col-sm-8">
              { this.isEmpty(this.state.employees) ? '' : <EmployeeList departmentName={this.state.departmentName} employees={this.state.employees} /> }
            </div>
            </div>
        )
    }
    isEmpty(obj) { 
      for ( var prop in obj ) { 
        return false; 
      } 
      return true; 
    }
    getDepartmentEmployee(department) {
      this.setState({
        employees: department.employees,
        departmentName:department.name
      });
    }
}

export default DepartmentList;