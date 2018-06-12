import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

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
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.state.employee.name} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="address">Address:</Label>
                <Input type="text" onChange={(event)=>this.handleAddressChange(event)}  value={this.state.employee.address} className="form-control" />
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={()=>this.handleToggleActive()}  checked={this.state.employee.active} />{' '}
                    Active
                </Label>
                </FormGroup>
                <Button onClick={(employee) => this.props.updateEmployee(this.getEmployee())} color="info" className="marginTwo">Submit</Button>
                <Button onClick={()=>this.cancelEvent()} color="info" className="marginTwo">Cancel</Button>
            </Form>
            </Col>
            </Row>
            </Container>
        )
    }
    cancelEvent() {
        let mountNode = ReactDOM.findDOMNode(this.refs.wassup);
        let unmount = ReactDOM.unmountComponentAtNode(mountNode);
        console.log(unmount);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.employee.name,
            address: nextProps.employee.address,
            active: nextProps.employee.active,            
        })
    }
    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        });
    }
    handleToggleActive() {
        this.setState({
            active: !this.state.active
        });
    }
    getEmployee() {
        return {
            id: this.props.employee.id,
            name:this.state.name,
            address:this.state.address,
            active: this.state.active
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/employees/'+this.props.match.params.empId)
        .then(res => {
          this.setState({ 
            employee : res.data 
          });
        })
        .catch((error)=>{
          console.log(error);
        });
    }
}
export default EmployeeProfile;