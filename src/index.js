import React from 'react';
import ReactDOM from 'react-dom';

import './static/styles/index.scss';
import App from './App';

const rootElement = document.getElementById('root');

const wrappedApp = <App />;

ReactDOM.render(wrappedApp, rootElement);
