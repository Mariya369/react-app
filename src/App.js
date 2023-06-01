import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
         <h1>
          Weather App
        </h1>
        <Weather defaultCity = "Marbella" />
    <footer>
This project was coded by <a href="https://www.mariyadotkova.com/" target="_blank" rel="noopener noreferrer">
  Mariya Dotkova</a> , is open-sourced on <a href="https://github.com/Mariya369/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>, and is <a href="https://tourmaline-profiterole-67cde6.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
    </footer>
    </div>
    </div>
  );
}

export default App;