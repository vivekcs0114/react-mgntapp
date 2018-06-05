import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
            <div>
                <div className="navbar-brand">
                    Welcome, {this.props.employee.name}
                </div>
                <div className="form-group">
                <label htmlFor="id">Id:</label>
                <p className="form-control">{this.props.employee.id}</p>
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
                <input type="button" onClick={(employee) => this.props.updateEmployee(this.getEmployee())} value="Submit" className="btn btn-info marginTwo" />
                <input type="button" className="btn btn-default marginTwo" onClick={()=>this.cancelEvent()} value="Cancel" />
            </div>
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