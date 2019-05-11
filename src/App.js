import React from 'react';
import './ss/style.css'

function App() {
  return (
    <div className="App">
      <nav>
        <h2 className="logo"><a href="#">Oscars 2019</a></h2>
        <ul class="nav-menu">
          <li><a class="nav-menu__link" href="#">Home</a></li>
          <li><a class="nav-menu__link" href="#">Best Actor</a></li>
          <li><a class="nav-menu__link" href="#">Best Actress</a></li>
          <li><a class="nav-menu__link" href="#">Best Films</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
