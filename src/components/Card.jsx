import React from "react";

const Card = (props) => {
  return (
    <div className="card">
    <h3>{props.title}</h3>
      <div className="card-content whitespace-pre-wrap text-lg">{props.data}</div>
    </div>
  );
};

export default Card;
