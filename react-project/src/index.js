import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
/* import App from './App';
import PhoneBook from './phone-book/PhoneBook';
import Main from './UserInfo/Main'; */
import TodoApp from './todo-list/TodoApp'

// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<PhoneBook />, document.getElementById('root'));
//ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<TodoApp />, document.getElementById('root'));

serviceWorker.unregister();
