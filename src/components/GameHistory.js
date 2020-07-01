import React from "react";
import { Table, Button, Container } from "reactstrap";
import "./GameHistory.css";

const Example = (props) => {
  return (
    <>
      <Container className="tab">
        <div className="game-history-live">
          <div className="abq">
            <div className="game-history-div">
              <div className="game-history-title">
                <div className="gme">Game</div>
                <div className="hist">History</div>
              </div>
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

          <div className="table-row">
            <div className="table-col">
              <Table className="main-table" responsive size="sm">
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
      </Container>
    </>
  );
};

export default Example;
