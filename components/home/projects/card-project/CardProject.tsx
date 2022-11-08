import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ContainedButton } from "../../../common/Common.styled";
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
  images: string[];
}
const CardProject: FC<CardProjectProps> = (props) => {
  return (
    <Card>
      <Image className="image " src={props.image} alt="" fill />
      <ChipContainer className="chips">
        {props.tools.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </ChipContainer>
      <HoverInfo className="hover">
        <h4>{props.description}</h4>
        <Link scroll={false} href={"/projects/" + props.slug}>
          <ContainedButton className="button">{props.title}</ContainedButton>
        </Link>
      </HoverInfo>
    </Card>
  );
};

export default CardProject;
