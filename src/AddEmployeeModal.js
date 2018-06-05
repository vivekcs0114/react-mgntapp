import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Modal from 'react-modal';

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
    constructor () {
      super();
      this.state = {
        showModal: false,
        name: '',
        address: '',
        active: false,
        id: ''
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    componentWillMount() {
        Modal.setAppElement('body');
    }

    render () {
      return (
        <div>
          <button className="btn btn-info" onClick={this.handleOpenModal}>Add Employee</button>
          <ReactModal 
            isOpen={this.state.showModal}
            style={customStyles}>
            <button className="close" aria-label="Close" onClick={this.handleCloseModal}>
            <div aria-hidden="true">&times;</div>
            </button>
            <div>
                <div className="form-group">
                <label htmlFor="id">Id:</label>
                <input type="number" onChange={(event)=>this.handleIdChange(event)}  value={this.state.id} className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.state.name} className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" onChange={(event)=>this.handleAddressChange(event)}  value={this.state.address} className="form-control" />
                </div>
                <div className="checkbox">
                <label><input type="checkbox" onChange={()=>this.handleToggleActive()}  checked={this.state.active} /> Active </label>
                </div>
                <div className=" text-center">
                <input type="button" onClick={(employee) => this.props.addEmployee(this.getInputData())} value="Submit" className="btn btn-info" />
                </div>
            </div>
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
            id: this.state.id,
            name:this.state.name,
            address:this.state.address,
            active: this.state.active
        }
    }
}

export default AddEmployeeModal;