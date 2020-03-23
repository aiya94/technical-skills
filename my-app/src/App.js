import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Testing for my technical skills folder</h1>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
