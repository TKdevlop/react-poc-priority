import React, { Component } from "react";
import "./App.css";
import Priority from "./Priority";

class App extends Component {
  render() {
    return (
      <div
        style={{ position: "absolute", top: "50%", left: "46%" }}
        className="App"
      >
        <Priority />
      </div>
    );
  }
}

export default App;
