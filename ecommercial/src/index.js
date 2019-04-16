import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import reducers from './modules';
import { Provider } from 'react-redux';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider> ,
    document.getElementById('root')
);

registerServiceWorker();
