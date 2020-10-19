import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Register from './components/register/register';

function Hello(props) {
  return <h1> Hello from react! {props.library} </h1>
}



function App() {

  return (
    <>
      <Home />
      <Register />
    </>
  );
}

export default App;
