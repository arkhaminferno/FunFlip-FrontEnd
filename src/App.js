import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <main>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Game} />
              <Route path="/affiliation" exact component={Referral} />
              <Route path="/about" exact component={About} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  }
}
