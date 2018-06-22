import React, {Component} from 'react';
import Department from './Department';
import AddDepartmentModal from '../AddDepartmentModal'
import { Container, Row, Col, Table } from 'reactstrap';
import { fetchDepartmentList } from '../actions/departmentActions';
import { connect } from 'react-redux';

class DepartmentList extends Component {
    render() {
        return (
          <Container>
            <Row>
              <Col  sm="12" md={{ size: 8, offset: 2 }}>
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
                  this.props && this.props.department ?
                  this.props.department.map(dep => 
                  <Department 
                  key={dep.id}
                  department={dep} />) : null
                } 
                </tbody>
                </Table>
                <AddDepartmentModal />
              </Col>
            </Row>
          </Container>
        )
    }
    componentWillMount() {
      this.props.dispatch(fetchDepartmentList());
    }
}

function mapStateToProps(state){
  return state = {
      department: state.department.department
  };
}

export default connect(mapStateToProps)(DepartmentList);