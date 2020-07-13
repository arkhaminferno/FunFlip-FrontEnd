import React, { Component } from "react";
import "./referral.css";

import { Container, Button, Input, Row, Col } from "reactstrap";

import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
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
                  <div className="btn-copier">
                    <Input
                      placeholder="link"
                      disabled="disabled"
                      className="affiliate-generation"
                    >
                      abk
                    </Input>
                  </div>

                  <Container className="copy-button">
                    <Button className="copy-button-style">Copy</Button>
                  </Container>
                  <br />
                  <div className="social-login-flex ">
                    <Button className="social-btn fbb ">
                      <FaFacebook />
                      &nbsp; Share on Facebook
                    </Button>

                    <Button className="social-btn tgg ">
                      <FaTelegramPlane />
                      &nbsp; Share on Telegram
                    </Button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="second-card ">
                  <div className="first-partition"></div>
                  <div className="second-partition">
                    <div className="number-of-refers">
                      <div className="count-refer">5</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Container>
          </Row>
          <br />
        </Col>
      </div>
    );
  }
}
