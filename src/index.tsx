import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('root') as HTMLElement
);
registerServiceWorker();
