import React from "react";
import "./PatternCard.css";

const PatternCard = props => (
  <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img id="img" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PatternCard;
