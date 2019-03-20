import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './css/main.css';
import Main from './Main'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
