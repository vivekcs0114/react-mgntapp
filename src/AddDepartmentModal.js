import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
class AddDepartmentModal extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        name: '',
        id: ''
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
          <Button color="info" onClick={this.handleOpenModal}>Add Department</Button>
          <ReactModal 
            isOpen={this.state.showModal}
            style={customStyles}>
            <Button className="close" aria-label="Close" onClick={this.handleCloseModal}>
            <div aria-hidden="true">&times;</div>
            </Button>
            <Form>
                <FormGroup>
                <Label for="id">Id:</Label>
                <Input type="number" onChange={(event)=>this.handleIdChange(event)}  value={this.state.id} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.state.name} className="form-control" />
                </FormGroup>
                <div className=" text-center">
                <Button onClick={(department) => this.props.addDepartment(this.getInputData())} color="info">Submit</Button>
                </div>
            </Form>
          </ReactModal>
        </div>
      );
    }
    handleIdChange(event) {
        this.setState({
            id: event.target.value
        });
    }
    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    getInputData() {
        return {
            id: this.state.id,
            name:this.state.name
        }
    }
}

export default AddDepartmentModal;