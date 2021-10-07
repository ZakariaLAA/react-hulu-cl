import React, { useState } from 'react';
import Header from "./Component/Header"

import './App.css';
import Nav from './Component/Nav';
import Results from './Component/Results';
import requests from './Component/ApiFolder/request'


function App() {

    const [selectedOption,setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="App">

      <Header /> 

      <Nav  setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption}/>

    </div>
  );
}

export default App;
