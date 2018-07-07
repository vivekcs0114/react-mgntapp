import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
