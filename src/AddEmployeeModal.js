import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addEmployee, addDepartmentEmployees } from './actions/employeeActions'; 

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
class AddEmployeeModal extends Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false,
        name: '',
        address: '',
        active: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: !this.state.showModal });
    }
    
    componentWillMount() {
        Modal.setAppElement('body');
    }

    render () {
      return (
        <div>
          <Button color="info" onClick={this.handleOpenModal}>Add Employee</Button>
          <ReactModal 
            isOpen={this.state.showModal}
            style={customStyles}>
            <Button className="close" aria-label="Close" onClick={this.handleCloseModal}>
            <div aria-hidden="true">&times;</div>
            </Button>
            <Form>
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
                <div className=" text-center">
                <Button onClick={(employee) => this.addEmployee(this.getInputData())} color="info">Submit</Button>
                </div>
            </Form>
          </ReactModal>
        </div>
      );
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
    getInputData() {
        return {
            name:this.state.name,
            address:this.state.address,
            active: this.state.active
        }
    }
    addEmployee(employee) {
        if(this.props.depId) {
            this.props.dispatch(addDepartmentEmployees(this.props.depId, employee));
        } else {
            this.props.dispatch(addEmployee(employee));
        }
        this.setState({
            showModal:false
        })
    }
}

function mapStateToProps(state){
    return state = {
      employee:state.employee.employee
    };
}

export default connect(mapStateToProps)( AddEmployeeModal);