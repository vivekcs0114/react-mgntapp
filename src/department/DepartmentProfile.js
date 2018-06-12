import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

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
            <Form>
                <div className="navbar-brand">
                    Welcome, {this.state.department.name}
                </div>
                <FormGroup>
                <Label for="id">Id:</Label>
                <p className="form-control">{this.state.department.id}</p>
                </FormGroup>
                <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" onChange={(event)=>this.handleNameChange(event)}  value={this.state.department.name} className="form-control" />
                </FormGroup>
                <FormGroup>
                <Label for="address">Overview:</Label>
                <Input type="text" onChange={(event)=>this.handleOverviewChange(event)}  value={this.state.department.overview} className="form-control" />
                </FormGroup>
                <Button onClick={(department) => this.props.updateDepartment(this.getDepartment())} color="info" className="marginTwo">Update</Button>
            </Form>
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
    componentDidMount() {
        axios.get('http://localhost:8080/departments/'+this.props.match.params.depId)
        .then(res => {
          this.setState({ 
            department : res.data 
          });
        })
        .catch((error)=>{
          console.log(error);
        });
    }
}
export default DepartmentProfile;