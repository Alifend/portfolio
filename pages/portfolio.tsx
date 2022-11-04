import React from "react";
import styled from "styled-components";
import { Title } from "../components/common/Common.styled";
import CardProject from "../components/home/projects/card-project";
import Layout from "../components/layout";
import { ProjectsData } from "../data/projects";

const Container = styled.section`
  max-width: 1200px;
  padding-top: 7rem;
  margin-inline: auto;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const Portfolio = () => {
  return (
    <Container>
      <Title style={{ marginBottom: "2rem" }}>My projects</Title>
      <ProjectsContainer>
        {ProjectsData.map((project) => (
          <CardProject {...project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

Portfolio.layout = Layout;
export default Portfolio;
