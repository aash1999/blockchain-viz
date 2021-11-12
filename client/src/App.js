//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Components/header/header.js'
import Form from './Components/form/form.js'
import ChainList from './Components/chainList/chainlist.js'

import Axios from 'axios';


function App() {

  
  
  
    //alert("hi");
  

  return (
    <div >
      <Header/>
      <div className = "flex-container">
        <Form className = "flex-left"/>
        <ChainList className = "flex-right"/>
      </div>
      <div className="back-img"></div>
      <div className="footer"></div>
      
    </div>
  );
}

export default App;
