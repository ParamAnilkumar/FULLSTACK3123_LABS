
import React from 'react';
import './App.css';
import logo from './logo.svg'
import Greet from './components/Greet';
import Student from './components/Student';


function App() {
  const student = {
    id:101411591,
    name:"Param",
    college:"George Brown College, Toronto"
  }
  return (
    <div className="App">
    <header className="App-header">

      <div>
      <React.Fragment>
    <div text-align="center">
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    <Greet/>
    <Student student={student}/>
    </React.Fragment>
      </div>
    
    </header>
  </div>
    
  
  )
}

export default App;
