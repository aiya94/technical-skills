import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import AnimatedButton from "./Component/AnimatedButton.js";

function App() {
  return (
    <div className="App">
      <h1>Techinical skills</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Technical skills needed for interview</p>
        <p>Todo list</p>
        <ul>
          <li>Create my own blog of experience i get from being interviewed</li>
          <li>
            Create small post how to feel when you actually interview person
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
