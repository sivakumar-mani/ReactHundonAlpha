import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/App.css'

ReactDOM.render(
 <Layout/>,
  document.getElementById('root')
);

registerServiceWorker();
