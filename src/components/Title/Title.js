import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;

export default Title;


// title="MindMeld"
// score={this.state.currentScore}
// topScore={this.state.topScore}
// resultMessage={this.state.resultMessage}