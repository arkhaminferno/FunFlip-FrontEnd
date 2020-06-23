import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <About />
        <Footer />
      </div>
    );
  }
}
