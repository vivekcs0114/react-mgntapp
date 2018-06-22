import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateDepartment, fetchDepartment } from '../actions/departmentActions';
import { connect } from 'react-redux';

class DepartmentProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            department:{},
            name:'',
            overview:''
        };
    }
    render() {
        return(
            <Container>
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            {this.props.department ? 
            <Form>
                <div className="navbar-brand">
                    Welcome, { this.props.department.name }
                </div>
                <FormGroup>
                <Label for="id">Id:</Label>
                <p className="form-control">{this.props.department.id}</p>
                </FormGroup>
                <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.props.department.name} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="overview">Overview:</Label>
                <Input type="text" onChange={(event)=>this.handleOverviewChange(event)}  value={this.props.department.overview} className="form-control" />
                </FormGroup>
                <Button onClick={(department) => this.props.dispatch(updateDepartment(this.getDepartment()))} color="info" className="marginTwo">Update</Button>
            </Form>
            : null}
            </Col>
            </Row>
            </Container>
        )
    }
    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleOverviewChange(event) {
        this.setState({
            overview: event.target.value
        });
    }
    getDepartment() {
        return {
            id: this.props.department.id,
            name:this.state.name,
            overview:this.state.address
        }
    }
    componentWillMount() {
        let id = this.props.match.params.depId;
        this.props.dispatch(fetchDepartment(id));
    }
}

function mapStateToProps(state){
    return state = {
      department:state.department.department
    };
}
  
export default connect(mapStateToProps)(DepartmentProfile);