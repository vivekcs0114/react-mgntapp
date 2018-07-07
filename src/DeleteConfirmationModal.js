import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteDepartment, fetchDepartmentList } from './actions/departmentActions';
import { deleteEmployee, fetchEmployeeList } from './actions/employeeActions';

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
class DeleteConfirmationModal extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
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

    deleteAction(target, id) {
      if(target === "employee") {
        this.deleteEmployee(id);
      } else if(target === "department") {
        this.deleteDepartment(id);
      }
    }
    deleteDepartment(depId) {
        this.props.dispatch(deleteDepartment(depId))
        this.setState({
            showModal:false
        })
        this.props.dispatch(fetchDepartmentList());
    }
    deleteEmployee(empId) {
      this.props.dispatch(deleteEmployee(empId))
      this.setState({
          showModal:false
      })
      this.props.dispatch(fetchEmployeeList());
  }
 
    render () {
      return (
        <div>
          <Button color="danger" onClick={this.handleOpenModal} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </Button>
          <ReactModal 
            isOpen={this.state.showModal}
            style={customStyles}>
            <Form>
                <FormGroup>
                <Label for="name">Do you want to continue</Label>
                </FormGroup>
                <div className=" text-center">
                <Button onClick={(target, depId) => this.deleteAction(this.props.target, this.props.depId)} color="info">Confirm</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.handleCloseModal} color="info">Cancel</Button>
                </div>
            </Form>
          </ReactModal>
        </div>
      );
    }
}

function mapStateToProps(state){
  return state = {
    department:state.department.department
  };
}

export default connect(mapStateToProps)(DeleteConfirmationModal);