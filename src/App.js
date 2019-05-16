import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './ss/style.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2019" />
        <Route to="/" component={Home} />
        <Route to="/" render={() => <Home title="Oscar Winners" /> } />
        {/*<Home title="Oscar Winners" /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
