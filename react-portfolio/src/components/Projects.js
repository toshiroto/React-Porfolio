import React from "react";
import data from "../data";
import Card from "./Card";

const Projects = () => {
  const cards = data.map(item => {
    return (
    <Card key={item.id} {...item}
    />
    )
  });
  return (
    <div>
      <h2>Projects I am Proud of</h2>
      <section className="card--list">{cards}</section>
    </div>
  );
};

export default Projects;
