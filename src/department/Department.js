import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

class Department extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/employees/departments/${this.props.department.id}/details`} >
                    {this.props.department.id}
                    </Link>
                </td>
                <td>
                {this.props.department.name}
                </td>
                <td>
                    <DeleteConfirmationModal target="department" depId={this.props.department.id}/>
                </td>
            </tr>
        )
    }
}

export default Department;