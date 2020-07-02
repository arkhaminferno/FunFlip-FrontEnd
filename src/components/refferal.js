import React, { Component } from "react";
import "./referral.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Container, Button } from "reactstrap";
export default class refferal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="parent-refer">
        <div className="parent-refer-flex">
          <div className="first-div">
            <div className="first-div-flex">
              <div className="affiliation-text">Affiliate Bonus</div>
              <div className="affiliation-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis sapien id purus euismod, sit amet porta sem congue.
                Donec id tortor at enim congue ultricies
              </div>
            </div>
          </div>
          <br />
          <Container className="second-div">
            <div className="first-card">
              <div className="card1">Your Referral link</div>
              <Container className="affiliate-generation">abk</Container>
              <br />
              <div className="copy-button">
                <Button className="copy-button-style">Copy</Button>
              </div>
              <br />
              <div className="social-login-flex">
                <div className="fb">abk</div>
                <div className="telegram">tgr</div>
              </div>
            </div>
            &nbsp;
            <div className="second-card"></div>
          </Container>
        </div>
      </div>
    );
  }
}
