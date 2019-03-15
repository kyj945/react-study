import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PhoneBook from './phone-book/PhoneBook';
import Main from './UserInfo/Main';

// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<PhoneBook />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
