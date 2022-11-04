import React from "react";
import styled from "styled-components";
import { SubTitle } from "../../common/Common.styled";

const Date = styled.h4`
  font-size: var(--font-size-15);
`;
const Spot = styled.h5`
  font-size: var(--font-size-1);
`;
const Level = styled.span`
  font-size: var(--font-size-1);
`;
const Name = styled.span`
  color: var(--color-green-100);
`;

const Container = styled.section``;

const Part = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 128px;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: 4px solid var(--color-green-100);
`;
const Bar = styled.div`
  height: 100px;
  width: 3px;
  background-color: var(--color-green-200);
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 8px;
`;

const Education = () => {
  return (
    <Container>
      <SubTitle style={{ marginBlock: "1.5rem" }}>Education</SubTitle>
      <Part>
        <Figure>
          <Circle />
          <Bar />
        </Figure>
        <Info>
          <Date>2017 - Present</Date>
          <Spot>Universidad del Valle</Spot>
          <Level>
            Bachelor Degree:
            <Name> Systems Engineer </Name>
          </Level>
        </Info>
      </Part>
      <Part>
        <Figure>
          <Circle />
          <Bar />
        </Figure>
        <Info>
          <Date>2013 - 2015</Date>
          <Spot>SENA</Spot>
          <Level>
            Associate Degree: <Name> Systems Technician </Name>
          </Level>
        </Info>
      </Part>
    </Container>
  );
};

export default Education;
