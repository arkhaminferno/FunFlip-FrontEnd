import React, { Component } from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
      </div>
    );
  }
}
