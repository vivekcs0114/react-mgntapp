import React from 'react';
import BarChart from 'react-bar-chart';
import { Row, Col, Table } from 'reactstrap';
 
export default class BarChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                "Overpayment": {
                   "vendor_id1": 10,
                   "vendor_id2": 10,
                   "vendor_id3": 15,
                   "vendor_id4": 20,
                   "vendor_id5": 15
                },
                "Duplicate Payment": {
                   "e1": 10,
                   "e2": 10,
                   "e3": 15,
                   "e4": 20,
                   "e5": 15
                },
                "Duplicate Vendor": {
                   "e1": 10,
                   "e2": 10,
                   "e3": 15,
                   "e4": 20,
                   "e5": 15
                },
                "Purchas Orders Without Reference To Quotation": {
                   "e1": 10,
                   "e2": 10,
                   "e3": 15,
                   "e4": 20,
                   "e5": 15
                },
                "Split Purchase Orders": {
                   "e1": 10,
                   "e2": 10,
                   "e3": 15,
                   "e4": 20,
                   "e5": 15
                }
            },
            margin: {top: 20, right: 20, bottom: 30, left: 40},
            width: 400
        }
    }

    getData = (obj, key) => {
        var dataObject = obj[key];
        var data = [];
        for(var key in dataObject) data.push(dataObject[key]);
        return data;
    }
    getLabel(obj, key) {
        var labelObject = obj[key];
        var label = [];
        for(var key in labelObject) label.push(key);
        return label;
    }
 
  componentDidMount = () => {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  }
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
 
  render() {
    return (
        <div ref='root'>
            <Table>
            <Row>
            {Object.entries(this.state.data).map(([key, type]) =>
            <Col md="4">
            <div style={{width: '50%'}}> 
            <BarChart ylabel={key}
                width={this.state.width}
                height={400}
                margin={this.state.margin}
                data={() => this.getData(this.state.data , key)}
                onBarClick={this.handleBarClick}/>
            </div>
            </Col>
            )}
            </Row>
            </Table>
        </div>
    );
  }
}