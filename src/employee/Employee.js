import React, {Component} from 'react';

class Employee extends Component {
    render() {
        return (
            <tr>
                <td>
                    <div onClick={() => this.props.getEmployee(this.props.employee)}>
                        {this.props.employee.id}
                    </div>
                </td>
                <td>
                    {this.props.employee.name}
                </td>
            </tr>
        )
    }
}

export default Employee;