import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

const store = createStore()

ReactDom.render(<App />, document.getElementById('root'));