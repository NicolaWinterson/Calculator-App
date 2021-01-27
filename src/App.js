import React from 'react';
import Calculator from "./components/Calculator/Calculator"
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-container__heading">Calculator app</h1>
      <Calculator />      
    </div>
  );
}

export default App;
