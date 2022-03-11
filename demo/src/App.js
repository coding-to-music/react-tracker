import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import buildInfo from "./buildInfo";

const buildDate = new Date(buildInfo.buildDate);

class App extends Component {
  componentDidMount() {
    console.log(`Build Number: ${buildInfo.buildVersion}`);
    console.log(`Build Date: ${buildDate.toString()}`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Build Info</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
