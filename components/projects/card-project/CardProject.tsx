import Image from "next/image";
import React from "react";
import { Card, Chip, ChipContainer, HoverInfo } from "./Card.styled";

const CardProject = () => {
  const mockedData = ["React", "Next", "Firebase", "Nestjs", "JWT"];

  return (
    <Card>
      <ChipContainer className="chips">
        {mockedData.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </ChipContainer>
      {/* <Image
        src="https://areajugones.sport.es/wp-content/uploads/2022/09/cyberpunk-edgerunners-8.jpg"
        alt=""
        fill
      /> */}
      <HoverInfo className="hover">
        <h4>
          Descripción larga de un proyecto asdkj as d d daskjdkalsjdklaj asdjask
          askdjaskljd
        </h4>
        <button>Nombre de proyecto</button>
      </HoverInfo>
    </Card>
  );
};

export default CardProject;
