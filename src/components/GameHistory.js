import React from "react";
import { Table, Button } from "reactstrap";
import "./GameHistory.css";

const Example = (props) => {
  return (
    <>
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
        <div className="table-row">
          <div className="table-col">
            <Table className="main-table" responsive size="md">
              <thead>
                <tr>
                  <th>#</th>
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
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
