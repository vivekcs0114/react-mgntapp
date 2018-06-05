import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EmployeeProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.employee.name,
            address: this.props.employee.address,
            active: this.props.employee.active
        };
    }
    render() {
        return(
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
                <Button onClick={(employee) => this.props.updateEmployee(this.getEmployee())} color="info" className="marginTwo">Submit</Button>
                <Button onClick={()=>this.cancelEvent()} color="info" className="marginTwo">Cancel</Button>
            </Form>
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
}
export default EmployeeProfile;