import React, { Component } from "react";
import "./referral.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Container, Button, Input, Row, Col } from "reactstrap";
export default class refferal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="parent-refer">
        <Col>
          <Row className="first-div">
            <Col>
              <div className="affiliation-text">Affiliate Bonus</div>
              <Container className="affiliation-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lobortis sapien id purus euismod, sit amet porta sem congue.
                Donec id tortor at enim congue ultricies
              </Container>
            </Col>
          </Row>

          <br />
          <Row className="second-div">
            <Container className="s-div">
              <Col>
                <div className="first-card">
                  <div className="card1">Your Referral link</div>
                  <Input
                    placeholder="link"
                    disabled="disabled"
                    className="affiliate-generation"
                  >
                    abk
                  </Input>

                  <br />
                  <Container className="copy-button">
                    <Button className="copy-button-style">Copy</Button>
                  </Container>
                  <br />
                  <Container className="social-login-flex fluid">
                    <div className="fb">abk</div>
                    <div className="telegram">tgr</div>
                  </Container>
                </div>
              </Col>
              <Col>
                <div className="second-card "></div>
              </Col>
            </Container>
          </Row>
          <br />
        </Col>
      </div>
    );
  }
}
