import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PhoneBook from './phone-book/PhoneBook'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PhoneBook />, document.getElementById('root'));

serviceWorker.unregister();
