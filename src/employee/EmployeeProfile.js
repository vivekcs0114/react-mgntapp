import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchEmployee, updateEmployee } from '../actions/employeeActions';

class EmployeeProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:{},
            name:'',
            address:'',
            active:false
        }
    }
    render() {
        return(
            <Container>
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            { this.props.employee ?
            <Form>
                <div className="navbar-brand">
                    Welcome, {this.state.employee.name}
                </div>
                <FormGroup>
                <Label for="id">Id:</Label>
                <p className="form-control">{this.state.employee.id}</p>
                </FormGroup>
                <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.state.name} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="address">Address:</Label>
                <Input type="text" onChange={(event)=>this.handleAddressChange(event)}  value={this.state.address} className="form-control" />
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={()=>this.handleToggleActive()}  checked={this.state.active} />{' '}
                    Active
                </Label>
                </FormGroup>
                <Button onClick={(employee) => this.props.dispatch(updateEmployee(this.getEmployee()))} color="info" className="marginTwo">Update</Button>
            </Form>
            : null }
            </Col>
            </Row>
            </Container>
        )
    }
    handleNameChange(event) {
        this.setState({
            name:event.target.value
        })
    }
    handleAddressChange(event) {
        this.setState({
            address:event.target.value
        })
    }
    handleToggleActive() {
        this.setState({
            active:!this.state.active
        })
    }
    getEmployee() {
        return {
            id: this.state.employee.id,
            name:this.state.name,
            address:this.state.address,
            active:this.state.active
        }
    }
    componentWillMount() {
        let id = this.props.match.params.empId;
        this.props.dispatch(fetchEmployee(id));
    }

    componentWillReceiveProps(nextProps) {
        const employee = nextProps.employee;
        this.setState({
            employee:employee,
            name:employee.name,
            address:employee.address,
            active:employee.active
        })
    }
}
function mapStateToProps(state){
    return state = {
      employee:state.employee.employee
    };
}
  
export default connect(mapStateToProps)(EmployeeProfile);