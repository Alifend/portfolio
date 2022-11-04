import React from "react";
import Collapsible from "../collapsible/Collapsible";

const mockedData = [
  { name: "HTML", tools: [] },
  { name: "CSS", tools: ["Bootstrap", "Tailwind"] },
  { name: "Javascript", tools: ["Bootstrap", "Tailwind"] },
  { name: "React", tools: ["Redux", "framer-motion", "react-query"] },
  { name: "Node", tools: ["Express", "Nestjs"] },
  { name: "SQL", tools: ["Postgres", "MYSQL"] },
  { name: "NOSQL", tools: ["MongoDB", "Firebase"] },
];
const Skills = () => {
  return (
    <div style={{ borderRadius: "15px", overflow: "hidden", padding: "2px" }}>
      {mockedData.map((element) => (
        <Collapsible {...element} />
      ))}
    </div>
  );
};

export default Skills;
