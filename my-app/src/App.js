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
      <p>
        Avoid burnout.. Overworking yourself is a pretty common thing if you’re
        trying to study something in your nights after work and weekends. There
        was a point I hit where I would study and work a full day, then stay up
        until midnight or 1am working. I remember one weekend where I’d spent
        all day and night working on the tasks and also trying to work out, and
        by Monday evening, I felt simply exhausted. I realized then that I had
        probably burnt myself out. And I really needed to make time to rest...
      </p>
      {/* <AnimatedButton /> */}
    </div>
  );
}

export default App;
