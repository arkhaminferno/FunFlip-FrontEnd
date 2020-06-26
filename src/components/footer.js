import React from "react";
import "./footer.css";
import { Container } from "reactstrap";
const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="parent-footer">
        <div className="first-footer">
          <div id="footer-title">Our Games</div>
          <div id="link">
            <a>FunFlip</a>
          </div>
          <div id="link">
            <a>Fortune Cups(Coming Soon)</a>
          </div>
        </div>
        <div className="second-footer">
          <div id="footer-title">Project Datas</div>
          <div>
            <a id="link">Github</a>
          </div>
          <div>
            <a id="link">Smart Contract</a>
          </div>
          <div>
            <a id="link">White Paper</a>
          </div>
        </div>
        <div className="third-footer">
          <div id="footer-title">Reach out to us</div>
          <div>
            <a id="link">Telegram</a>
          </div>
          <div>
            <a id="link">Interactive Chat</a>
          </div>
          <div>
            <a id="link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
