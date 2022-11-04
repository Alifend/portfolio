import React from "react";
import CardProject from "./card-project";
import { StyledProjects } from "./Projects.styled";

const Projects = () => {
  return (
    <StyledProjects>
      <h3>Some of my projects</h3>
      <h5>
        I love learning new frontend and backend frameworks and tools while
        praticing! Here are some of my projects!
      </h5>
      <CardProject />
    </StyledProjects>
  );
};

export default Projects;
