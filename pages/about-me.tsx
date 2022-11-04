import React from "react";
import styled from "styled-components";
import Education from "../components/about-me/education";
import Skills from "../components/about-me/skills";
import { Paragraph, SubTitle, Title } from "../components/common/Common.styled";
import Layout from "../components/layout";

const Container = styled.section`
  max-width: 1100px;
  padding-top: 7rem;
  margin-inline: auto;
  p {
    margin-top: 2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <Title>About me</Title>
      <Paragraph>
        Over the last few years, web development has become a real passion of
        mine. I have always been intrigued by websites. When I was just a little
        boy, I started exploring them by using website builders, using inspect
        element on websites, thinking I was an actual wizard when changing the
        websites, but never made the step to coding. Until it was time to go to
        college. At this moment, my journey in the digital world begon. I
        discovered a strong passion for web development and fell in love with
        writing code. The fact that I could make something visual with a few
        lines of code blew my mind and motivated me to dig dieper into the
        possibilities of the web.
      </Paragraph>
      <SubTitle>Skills</SubTitle>
      <Skills />
      <Education />
    </Container>
  );
};

AboutMe.layout = Layout;
export default AboutMe;
