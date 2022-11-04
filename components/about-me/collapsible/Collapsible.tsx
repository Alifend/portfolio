import { motion } from "framer-motion";
import React, { useState, FC } from "react";
import styled from "styled-components";
import { Fade } from "../../animations/animations";

interface Props {
  name: string;
  tools: string[];
}

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--color-gray-300);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  padding-left: 1.1rem;
  border-bottom: 0.5px solid var(--color-gray-100);
  cursor: pointer;
`;

const CollapseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-gray-400);
  font-weight: var(--font-weight-1);
  font-size: var(--font-size-16);
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  align-items: center;
`;

const CollapsibleList = styled(motion.ul)`
  background-color: var(--color-gray-100);
  overflow: hidden;
  height: 0px;
  transition: all 0.3s ease;
`;

const ItemList = styled.li`
  display: flex;
  align-items: flex-start;
  height: 48px;
`;

const Figure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  gap: 5px;
  padding-top: 3px;
`;
const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const GreenCircle = styled(Circle)`
  outline: 3px solid var(--color-green-100);
`;
const PurpleCircle = styled(Circle)`
  outline: 3px solid var(--color-purple-100);
  display: inline-block;
  margin-right: 1rem;
`;

const Bar = styled.div`
  height: 23px;
  width: 3px;
  background-color: var(--color-gray-300);
  border-radius: 5px;
`;

const Arrow = styled.img`
  rotate: 90deg;
  transition: rotate 0.3s ease;
`;
const Collapsible: FC<Props> = ({ name, tools }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header onClick={() => setOpen(!open)}>
        <div>
          <PurpleCircle />
          {name}
        </div>
        <CollapseButton>
          Frameworks/tools{" "}
          <Arrow style={open ? { rotate: "270deg" } : {}} src="/arrow.svg" />
        </CollapseButton>
      </Header>

      <CollapsibleList
        style={
          open ? { height: 48 * (tools.length + 1), paddingTop: "1rem" } : {}
        }
      >
        {tools.map((tool) => (
          <ItemList>
            <Figure>
              <GreenCircle /> <Bar />
            </Figure>
            {tool}
          </ItemList>
        ))}
        <ItemList>
          <Figure>
            <GreenCircle />
          </Figure>
          Always Learning!
        </ItemList>
      </CollapsibleList>
    </div>
  );
};

export default Collapsible;
