import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/contact.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);