import React, { Component } from "react";
import "./about.css";
import { Table, Button } from "reactstrap";
const About = () => {
  return (
    <>
      <div className="parent-about">
        <div className="abq">
          <div className="game-history-div">
            <div className="game-history-title">Game History</div>
            <div className="hr-line">
              <hr className="hr-line-id" />
            </div>
          </div>
        </div>
        <div>
          The FunFlip dapp is a decentralized version of the popularly know
          coinflip game built with 50% chance of wining. We combined the best
          elements of blockchain, cryptography and gambling to create a truly
          fair and transparent gaming dapp.
        </div>
        <div className="abq">
          <div className="game-history-div">
            <div className="game-history-title">Game History</div>
            <div className="hr-line">
              <hr className="hr-line-id" />
            </div>
          </div>
        </div>
        <div>
          FUNFLIP is played by predicting a possible outcome between HEAD OR
          TAIL. The players can predict on the outcome of the game to be either
          HEAD or TAIL. If the prediction is right, the winners’ prize amount is
          one’s betting amount multiplied by 1.90, if the prediction is wrong,
          player gets only 5% of the amount staked as compensation for betting.
          10% of every wining bet is deducted as a fee for the platform.
        </div>
        <div className="abq">
          <div className="game-history-div">
            <div className="game-history-title">Game History</div>
            <div className="hr-line">
              <hr className="hr-line-id" />
            </div>
          </div>
        </div>
        <div>
          We have developed a decentralized drawing algorithm for guaranteeing
          the transparency of the game. This decentralized drawing algorithm
          will determine the results based on the random hash generated from the
          blockchain.
        </div>
        <div className="abq">
          <div className="game-history-div">
            <div className="game-history-title">Game History</div>
            <div className="hr-line">
              <hr className="hr-line-id" />
            </div>
          </div>
        </div>
        <div>
          We have designed our smart contract to return 5%-10% of bet placed
          each time a player looses a bet.
        </div>
        <div className="game-history-live">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">Game History</div>
              <div className="hr-line">
                <hr className="hr-line-id" />
              </div>
            </div>
          </div>
          <div className="buttons-flex">
            <Button id="btn"> All Bets</Button>
            <Button id="btn">My Bets</Button>

            <Button id="btn">Top Betters</Button>
          </div>
          <div className="c1">
            <div className="r1">
              <div className="table-row">
                <div className="table-col">
                  <Table className="main-table" responsive size="md">
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th>Bet</th>
                        <th>Side Selected</th>
                        <th>Result</th>
                        <th>Result</th>
                        <th>Result</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
