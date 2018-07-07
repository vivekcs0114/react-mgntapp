import React from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse } from 'reactstrap';
import EmployeeList from '../employee/EmployeeList';
import DepartmentList from '../department/DepartmentList';
import EmployeeProfile from '../employee/EmployeeProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DepartmentHeader from '../header/DepartmentHeader';
import DepartmentProfile from '../department/DepartmentProfile';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <Router>
      <div>
        <Navbar color="dark" className="navbar-dark navbar-expand-sm" light expand="md">
          <NavbarBrand href="/">REACT APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/departments">Departments</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/employees">Employees</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/#">Logout</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          <Route exact path="/" component={DepartmentList}/>
          <Route exact path="/departments" component={DepartmentList}/>
          <Route exact path="/employees" component={EmployeeList}/>
          <Route exact path="/employees/:empId" component={EmployeeProfile}/>
          <Route path="/employees/departments/:depId" component={DepartmentHeader}/>

          <Route exact path="/employees/departments/:depId/details" component={DepartmentProfile}/>
          <Route exact path="/employees/departments/:depId/employees" component={EmployeeList}/>
      </div>
      </Router>
    );
  }
}

export default Header;