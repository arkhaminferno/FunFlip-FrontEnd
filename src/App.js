import React, { Component } from "react";
import "./App.css";
import Referral from "./components/refferal";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import LoginAlert from "./components/login-alert";
import Game from "./components/game";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Referral />
        <Footer />
      </div>
    );
  }
}
