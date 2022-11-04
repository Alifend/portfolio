import Link from "next/link";
import React, { FC } from "react";
import { Card, Chip, ChipContainer, HoverInfo } from "./Card.styled";

export interface CardProjectProps {
  title: string;
  goals: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tools: string[];
  slug: string;
}
const CardProject: FC<CardProjectProps> = (props) => {
  return (
    <Card url={props.image}>
      <ChipContainer className="chips">
        {props.tools.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </ChipContainer>
      {/* <Image
        src="https://areajugones.sport.es/wp-content/uploads/2022/09/cyberpunk-edgerunners-8.jpg"
        alt=""
        fill
      /> */}
      <HoverInfo className="hover">
        <h4>{props.description}</h4>
        <Link scroll={false} href={"/projects/" + props.slug}>
          <button>{props.title}</button>
        </Link>
      </HoverInfo>
    </Card>
  );
};

export default CardProject;
