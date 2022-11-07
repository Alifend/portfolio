import { ProjectsData } from "../../data/projects";
import Layout from "../../components/layout";
import type { GetStaticPropsContext } from "next";
import {
  ContainedButton,
  OutlinedButton,
  SubTitle,
  Title,
} from "../../components/common/Common.styled";
import styled from "styled-components";
import Link from "next/link";
import { CardProjectProps } from "../../components/home/projects/card-project/CardProject";
import Image from "next/image";

const Container = styled.section`
  width: min(90%, 1100px);
  height: auto;
  padding-top: 5rem;
  margin-inline: auto;
`;
const Text = styled.p`
  line-height: 1.8;
  margin-block: 1rem;
  font-weight: var(--font-weight-300);
  font-size: var(--font-size-12);
`;
const BackButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: var(--color-gray-300);
  border: none;
  display: grid;
  place-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;
`;

const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
`;
const Chip = styled.div`
  height: 30px;
  width: auto;
  background-color: var(--color-gray-300);
  margin-bottom: 0.8rem;
  color: white;
  border-radius: 8px;
  display: grid;
  place-content: center;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const BackArrow = styled.img`
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
`;

export default function Project({ project }: { project: CardProjectProps }) {
  return (
    <Container>
      <TitleContainer>
        <Link href="/portfolio" scroll={false}>
          <BackButton>
            <BackArrow src="/arrow.svg" alt="back arrow" />
          </BackButton>
        </Link>
        <Title>{project.title}</Title>
      </TitleContainer>
      <ChipsContainer>
        {project.tools.map((tool) => (
          <Chip key={tool}>{tool}</Chip>
        ))}
      </ChipsContainer>
      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <ButtonsContainer>
        <a href={project.link} target="_blank">
          <OutlinedButton>Live Website</OutlinedButton>
        </a>
        <a href={project.github} target="_blank">
          <ContainedButton>Github</ContainedButton>
        </a>
      </ButtonsContainer>
      <SubTitle>Goals</SubTitle>
      <Text>{project.goals}</Text>
      <SubTitle>Description</SubTitle>
      <Text>{project.description}</Text>
      <SubTitle>Images</SubTitle>
    </Container>
  );
}

Project.layout = Layout;

export const getStaticPaths = async () => {
  const paths = ProjectsData.map((project) => {
    return {
      params: { slug: project.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  const project = ProjectsData.find((project) => project.slug === slug);
  return {
    props: {
      project,
    },
  };
};
