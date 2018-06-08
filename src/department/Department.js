import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Department extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/employees/departments/${this.props.department.id}`} onClick={() => this.props.getDepartmentEmployee(this.props.department)}>
                    {this.props.department.id}
                    </Link>
                </td>
                <td>
                {this.props.department.name}
                </td>
            </tr>
        )
    }
}

export default Department;