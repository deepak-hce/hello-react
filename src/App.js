import React from 'react';
import './App.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Router } from 'react-router-dom';
import history from './helpers/history';
import Routes from './Routes';



function App() {

  return (
    <>
      <ReactNotification/>
      <Router history = { history }>
        <Routes />
      </Router>
    </>
  );
}

export default App;
