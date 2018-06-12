import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

export default class DepartmentHeader extends React.Component {
  render() {
    let depId  = this.props.match.params.depId;
    return (
      <div>
      <Container>
        <Row>
        <Col  sm="12" md={{ size: 8, offset: 2 }}>
        <Nav pills>
          <NavItem>
            <NavLink  activeClassName="active" tag={Link} to={`/employees/departments/${depId}/details`}>Details</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  activeClassName="active" tag={Link} to={`/employees/departments/${depId}/employees`}>Employees</NavLink>
          </NavItem>
        </Nav>
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
