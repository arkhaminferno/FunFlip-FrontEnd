import React, { Component } from "react";
import "./game.css";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Button } from "reactstrap";
export default class game extends Component {
  constructor() {
    super();
    this.state = {
      name: "nun",
    };
  }
  render() {
    return (
      <div className="parent-game">
        <div className="steps">
          <div className="step-one">
            <div className="balances">
              <div className="balance-align">
                <div className="my-balance">My Balance - 100</div>
              </div>
            </div>
            <div className="first-Step">
              <div className="First">
                <div className="fs"> First Step</div>
              </div>
              <div className="First-amount">
                <div className="select-amount">Select an amount to bet</div>
              </div>
            </div>
            <div className="main-div-bg-white">
              <div className="details-first">
                <div className="total-flip">0 Total Flip</div>
              </div>
              <div className="youare-betting">
                <div className="youare-betting-align">
                  <div className="youare"> You are betting</div>
                  <div className="youare-betting-buttons">
                    <div className="minus">
                      <AiOutlineMinus />
                    </div>
                    <div className="amount-input">
                      <div className="input-amount">z</div>
                    </div>
                    <div className="plus">
                      <BsPlus />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heads">
                <div className="row-center-head">
                  <div className="col-center-head">
                    <div className="head-img">
                      <img src="assets/head-small.png" height="40vh" />
                    </div>
                    <div className="head-description">
                      <div className="h-align">
                        <div className="h-top">Heads</div>
                      </div>
                      <div className="winning-chance">
                        <div className="winning-col">winning chance is 10%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tails">
                <div className="tail-img">
                  <img src="assets/tail-small.png" height="40vh" />
                </div>
                <div className="tail-description">
                  <div className="tail-row">
                    <div className="tail-col">Heads</div>
                  </div>
                  <div className="winning-chance">
                    <div className="winning-col">winning chance is 10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-two">
            <div className="second-Step">
              <div className="second">
                <div> Second Step</div>
              </div>
              <div className="second-betting">
                <div className="select-betting">
                  Select a betting option between <br /> HEAD or TAIL
                </div>
              </div>
            </div>
            <div className="star-coin">
              <img src="assets/star-head.png" width="50%" />
            </div>
            <div className="selected">Heads Selected !</div>
            <div className="flip-coin">
              <Button id="flip-button" value="FLIP COIN " />
            </div>
          </div>
          <div className="step-three">
            <div className="step-one">
              <div className="balances">
                <div className="balance-align">
                  <div className="house-bankroll">House Bankroll : 2000</div>
                </div>
              </div>
              <div className="first-Step">
                <div className="First">
                  <div className="fs"> First Step</div>
                </div>
                <div className="First-amount">
                  <div className="select-amount">Select an amount to bet</div>
                </div>
              </div>
              <div className="main-div-bg-white">
                <div className="details-first">
                  <div className="total-flip">0 Wins</div>
                </div>
                <div className="youare-betting">
                  <div className="youare-betting-align">
                    <div className="youare"> Payout on win</div>
                    <div className="input-box">
                      <Button id="ip-box" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-bet">
                <div className="ur-bet">
                  <Button />
                  <div className="head-tail-img">
                    <img src="assets/star-head.png" width="50%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
