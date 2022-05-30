import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card--image">
        <img src={`../images/${props.coverImg}`} alt={props.title} />
      </div>
      <div className="card--details">
          <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
