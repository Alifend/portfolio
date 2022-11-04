import AboutMe from "../components/home/about-me";
import Profile from "../components/home/profile";
import Projects from "../components/home/projects";
import Layout from "../components/layout";
import { Content } from "../components/layout/Layout.styled";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Home = () => {
  return (
    <>
      <Profile />
      <AboutMe />
      <Projects />
    </>
  );
};

Home.layout = Layout;

export default Home;
