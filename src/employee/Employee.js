import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Employee extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/employees/${this.props.employee.id}`} onClick={() => this.props.getEmployee(this.props.employee)}>
                        {this.props.employee.id}
                    </Link>
                </td>
                <td>
                    {this.props.employee.name}
                </td>
            </tr>
        )
    }
}

export default Employee;