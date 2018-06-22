import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchEmployee, updateEmployee, setName, setAddress, setStatus } from '../actions/employeeActions';

class EmployeeProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee:{},
            name:'',
            address:'',
            active:false
        };
    }
    render() {
        return(
            <Container>
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            { this.props.employee ?
            <Form>
                <div className="navbar-brand">
                    Welcome, {this.props.employee.name}
                </div>
                <FormGroup>
                <Label for="id">Id:</Label>
                <p className="form-control">{this.props.employee.id}</p>
                </FormGroup>
                <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.props.employee.name} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="address">Address:</Label>
                <Input type="text" onChange={(event)=>this.handleAddressChange(event)}  value={this.props.employee.address} className="form-control" />
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={()=>this.handleToggleActive()}  checked={this.props.employee.active} />{' '}
                    Active
                </Label>
                </FormGroup>
                <Button onClick={(employee) => this.props.dispatch(updateEmployee(this.getEmployee()))} color="info" className="marginTwo">Submit</Button>
                <Button onClick={()=>this.cancelEvent()} color="info" className="marginTwo">Cancel</Button>
            </Form>
            : null }
            </Col>
            </Row>
            </Container>
        )
    }
    cancelEvent() {
        console.log("cancel");
    }
    handleNameChange(event) {
        this.props.dispatch(setName(event.target.value));
    }
    handleAddressChange(event) {
        this.props.dispatch(setAddress(event.target.value));
    }
    handleToggleActive(event) {
        this.props.dispatch(setStatus(event.target.value));
    }
    getEmployee() {
        return {
            id: this.props.employee.id,
            name:this.state.name,
            address:this.state.address,
            active: this.state.active
        }
    }
    componentWillMount() {
        let id = this.props.match.params.empId;
        this.props.dispatch(fetchEmployee(id));
    }
}
function mapStateToProps(state){
    return state = {
      employee:state.employee.employee
    };
}
  
export default connect(mapStateToProps)(EmployeeProfile);