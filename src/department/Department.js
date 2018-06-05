import React, {Component} from 'react';

class Department extends Component {
    render() {
        return (
            <tr>
                <td>
                    <div onClick={() => this.props.getDepartmentEmployee(this.props.department)}>
                    {this.props.department.id}
                    </div>
                </td>
                <td>
                {this.props.department.name}
                </td>
            </tr>
        )
    }
}

export default Department;