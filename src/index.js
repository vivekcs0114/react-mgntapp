import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DepartmentList from './department/DepartmentList';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<DepartmentList />, document.getElementById('root'));
registerServiceWorker();
