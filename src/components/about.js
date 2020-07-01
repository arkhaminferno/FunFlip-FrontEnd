import React, { Component } from "react";
import "./about.css";
import Gamehistory from "./GameHistory";
import { Table, Button, Container } from "reactstrap";
const About = () => {
  return (
    <>
      <div className="parent-about">
        <br />
        <Container className="content">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">
                <div className="gme">About</div>
                <div className="hist">FunFlip</div>
              </div>
              <div className="hr-line">
                <hr className="hr-line-id" />
              </div>
            </div>
          </div>
          The FunFlip dapp is a decentralized version of the popularly know
          coinflip game built with 50% chance of wining. We combined the best
          elements of blockchain, cryptography and gambling to create a truly
          fair and transparent gaming dapp.
        </Container>
        <br />
        <Container className="content">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">
                <div className="gme">Brief </div>
                <div className="hist">Description</div>
                <div className="hist"> of </div>
                <div className="hist"> FunFlip</div>
                <div className="hist"> Game</div>
              </div>
              <div className="hr-line">
                <hr className="hr-line-id" />
              </div>
            </div>
          </div>
          FUNFLIP is played by predicting a possible outcome between HEAD OR
          TAIL. The players can predict on the outcome of the game to be either
          HEAD or TAIL. If the prediction is right, the winners’ prize amount is
          one’s betting amount multiplied by 1.90, if the prediction is wrong,
          player gets only 5% of the amount staked as compensation for betting.
          10% of every wining bet is deducted as a fee for the platform.
        </Container>
        <br />
        <Container className="content">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">
                <div className="gme">Fairness</div>
                <div className="hist"></div>
              </div>
              <div className="hr-line">
                <hr className="hr-line-id" />
              </div>
            </div>
          </div>
          We have developed a decentralized drawing algorithm for guaranteeing
          the transparency of the game. This decentralized drawing algorithm
          will determine the results based on the random hash generated from the
          blockchain.
        </Container>
        <br />
        <Container className="content">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">
                <div className="gme">Cashback</div>
                <div className="hist"> on</div>
                <div className="hist">loss</div>
              </div>
              <div className="hr-line">
                <hr className="hr-line-id" />
              </div>
            </div>
          </div>
          We have designed our smart contract to return 5%-10% of bet placed
          each time a player looses a bet.
        </Container>
        <br />
        <Container>
          <Gamehistory />
        </Container>
      </div>
    </>
  );
};

export default About;
