import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Departments from './department/DepartmentList';
import Employees from './employee/EmployeeList';

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/departments">DepartmentList</Link></li>
                        <li><Link to="/employees">EmployeeList</Link></li>
                    </ul>
            
                    <hr/>
            
                    <Route exact path="/" component={Departments}/>
                    <Route exact path="/departments" component={Departments}/>
                    <Route exact path="/employees" component={Employees}/>
                </div>
            </Router>
        )
    }
}

export default Routes;