import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card--image">
        <img src={`../images/${props.coverImg}`} alt={props.title} />
      </div>
      <div className="card--title">
        <h3>{props.title}</h3>
      </div>
      <div className="card--content">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
