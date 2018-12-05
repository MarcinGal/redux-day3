import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store } from './store'

window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(<App />, document.getElementById('root'));

