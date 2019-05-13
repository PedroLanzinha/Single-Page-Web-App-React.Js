import React from 'react';
import './ss/style.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar title="Oscars 2019" />
      <Home title="Oscar Winners" />
    </div>
  );
}

export default App;
