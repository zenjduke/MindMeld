import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/">{props.title}</a>
      </li>

      <li id="rw">{props.resultMessage}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;