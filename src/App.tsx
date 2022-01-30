import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <h1> Hello, World! </h1>
      <div className="sass-test" onClick={() => {
        alert('Hello World!');
      }}>Sass test</div>
    </div>
  )
}

export default App;