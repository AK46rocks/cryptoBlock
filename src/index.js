import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import store from './components/app/store';



ReactDOM.render(
        <Router>
            <Provider store={store}>
               <App />
            </Provider>
        </Router>, document.getElementById('root'));



serviceWorker.unregister();
