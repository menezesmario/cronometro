import React from 'react';
import './App.css';
import Contador from './Contador';
import LabelCronometro from './LabelCronometro';


function App() {
  return (
    <div className="App">
      <LabelCronometro name="Cronometro"/>
      <Contador/>
    </div>
  );
}

export default App;
