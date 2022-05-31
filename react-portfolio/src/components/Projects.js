import React from "react";
import data from "../data";
import Card from "./Card";

const Projects = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="section--still">
      <div id="projects">
        <h2>Projects I am Proud of</h2>
        <div className="row">
            {cards}
        </div>
      </div>
    </div>
  );
};

export default Projects;
