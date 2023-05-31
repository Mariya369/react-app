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
This project is open-sourced on <a href="https://github.com/Mariya369/weather-app">GitHub</a> and was coded by Mariya Dotkova.
    </footer>
    </div>
    </div>
  );
}

export default App;