import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <ul>
      <li>
        <h3 className="logo">{props.title}</h3>
      </li>

      <li id="message">{props.resultMessage}</li>

      <li id="scoreSpan"><span className="score">Top Score: {props.topScore}</span><br></br><span className="score">Current Score: {props.score}</span></li>
    </ul>
  </nav>
);

export default Nav;