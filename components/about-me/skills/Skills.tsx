import React from "react";
import Collapsible from "../collapsible/Collapsible";

const mockedData = [
  { name: "HTML", tools: ["Semantic HTML"] },
  { name: "CSS", tools: ["Bootstrap", "Tailwind", "CSS-Modules"] },
  {
    name: "Javascript",
    tools: [
      "Typescript",
      "Axios",
      "Promises",
      "Asyn-Await",
      "DOM",
      "LocalStorage",
      "Callbacks",
      "Highcharts",
      "Moment",
    ],
  },
  {
    name: "React",
    tools: [
      "Nextjs",
      "Redux",
      "Framer-motion",
      "React-query",
      "Styled-Components",
      "MUI",
      "React-leaflet",
      "Yup",
      "Formik",
    ],
  },
  { name: "Node", tools: ["Express", "Nestjs", "JWT", "Bcrypt", "Nodemailer"] },
  { name: "SQL", tools: ["Postgres", "MySQL", "TypeORM", "PrismaORM"] },
  { name: "NOSQL", tools: ["MongoDB", "Mongoose", "Firebase"] },
];
const Skills = () => {
  return (
    <div style={{ borderRadius: "15px", overflow: "hidden", padding: "2px" }}>
      {mockedData.map((element, index) => (
        <Collapsible key={index} {...element} />
      ))}
    </div>
  );
};

export default Skills;
