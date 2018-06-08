import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
