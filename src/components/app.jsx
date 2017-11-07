import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './views/partials/header';
import Routes from '../routes';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;