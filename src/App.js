import React, { Component } from "react";
import "./App.css";
import QuoteGenerator from "./views/QuoteGenerator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteGenerator />
      </div>
    );
  }
}

export default App;
