import React, { Component } from "react";
import "./game.css";
import GameHistory from "./GameHistory";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Button, Input, Card, Table, Container } from "reactstrap";
export default class game extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      headsclicked: true,
    };
  }

  incrementAmount = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  decrementAmount = () => {
    if (this.state.amount == 0) {
      return;
    } else {
      this.setState({ amount: this.state.amount - 1 });
    }
  };

  renderHead = () => {
    this.setState({ headsclicked: true });
  };
  renderTail = () => {
    this.setState({ headsclicked: false });
  };
  changeinAmount = (e) => {
    this.setState({ amount: e.target.value });
  };
  render() {
    return (
      <div className="parent-game">
        <Container>
          <div className="steps">
            <div className="step-one">
              <div className="balances">
                <div className="balance-align">
                  <div className="my-balance">My Balance - 100</div>
                </div>
              </div>
              <Card>
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
                          <AiOutlineMinus onClick={this.decrementAmount} />
                        </div>
                        <div className="amount-inp">
                          <div className="amount-align">
                            <Input
                              placeholder={0 + " " + "ETH"}
                              onChange={this.changeinAmount + " " + "ETH"}
                            ></Input>
                          </div>
                        </div>
                        <div className="plus">
                          <BsPlus onClick={this.incrementAmount} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jallad">
                    <div className="heads" onClick={this.renderHead}>
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
                              <div className="winning-col">
                                winning chance is 50%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tails" onClick={this.renderTail}>
                      <div className="tail-img">
                        <img src="assets/tail-small.png" height="40vh" />
                      </div>
                      <div className="tail-description">
                        <div className="tail-row">
                          <div className="tail-col">Tails</div>
                        </div>
                        <div className="winning-chance">
                          <div className="winning-col">
                            winning chance is 50%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
              {this.state.headsclicked ? (
                <React.Fragment>
                  <div className="star-coin">
                    <img src="assets/star-head.png" width="50%" />
                  </div>
                  <div className="selected">Heads Selected!</div>{" "}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="star-coin">
                    <img src="assets/star-tail.png" width="50%" />
                  </div>
                  <div className="selected">Tails Selected!</div>
                </React.Fragment>
              )}

              <div className="flip-coin">
                <Button id="flip-button"> FLIP COIN</Button>
              </div>
            </div>
            <div className="step-three">
              <div className="balances">
                <div className="balance-align">
                  <div className="house-bankroll">House Bankroll : 2000</div>
                </div>
              </div>
              <Card>
                <div className="step-one">
                  <div className="first-Step">
                    <div className="First">
                      <div className="fs"> Third Step</div>
                    </div>
                    <div className="First-amount">
                      <div className="select-amount">
                        Click "FLIP" and get the double <br /> of your bet
                      </div>
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
                          <Button id="ip-box"> 100 ETH</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state.headsclicked ? (
                    <>
                      <div className="-bet">
                        <div className="ur-bet">
                          <Button id="your-bet">Your Bet</Button>
                          <div className="head-tail-img">
                            <img src="assets/star-head.png" width="50%" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="-bet">
                        <div className="ur-bet">
                          <Button id="your-bet">Your Bet</Button>
                          <div className="head-tail-img">
                            <img src="assets/star-tail.png" width="50%" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </div>
          </div>
          <br />
          <GameHistory />
        </Container>
      </div>
    );
  }
}
