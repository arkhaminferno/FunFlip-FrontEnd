import React from "react";
import "./login-alert.css";
import { Alert, Button } from "reactstrap";
import { AiFillChrome } from "react-icons/ai";
import { DiFirefox } from "react-icons/di";

const Login = () => {
  return (
    <div className="login-parent">
      <div className="login-child">
        <Alert className="alertbox">
          <div id="wallet-alert">Please Log in to your</div>
          <div id="wallet-alert">Metamask wallet</div>
          <hr />
          <div className="wallet-alert-2">
            <p>
              If you haven't installed the Metamask wallet
              <br />
              yet,you can choose one of the following
              <br />
              extensions and download it in the Chrome browser.
            </p>
          </div>
          <br />
          <div className="link-wallet">
            <div>
              Chorme :{" "}
              {/* <AiFillChrome color={"white"} size={"1rem"} /> {"  "} */}
            </div>
            <div>
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                id="logo-browser"
              >
                {"   "}
                shorturl.at/flpA1
              </a>
            </div>
          </div>
          <div className="link-wallet">
            <div>
              Firefox {"  "} : {"   "}
              {/* <DiFirefox color={"white"} size={"1rem"} /> {"  "} */}
            </div>
            <div>
              {"   "}
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/"
                id="logo-browser"
              >
                {"   "}
                shorturl.at/abLSX
              </a>
            </div>
          </div>

          <br />
          <div className="wallet-alert-3">
            <p>
              The wallet needs to be connected to the <br />
              mainnet node to experience the game.
              <br />
              Please don't use the testnet node.
            </p>
          </div>
          <hr />
          <div className="btn-alignment">
            <Button id="button"> Confirm </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default Login;
