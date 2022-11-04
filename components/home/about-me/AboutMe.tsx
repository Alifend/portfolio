import Image from "next/image";
import { OutlinedButton } from "../../common/Common.styled";
import { StyledAboutMe } from "./AboutMe.styled";
import { motion } from "framer-motion";
import { Fade } from "../../animations/animations";
const AboutMe = () => {
  return (
    <StyledAboutMe>
      <motion.figure {...Fade}>
        <Image
          src="/profile.jpeg"
          fill
          alt="Profile picture"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </motion.figure>
      <div>
        <motion.h3 {...Fade}>About me</motion.h3>
        <motion.h4 {...Fade}>I am 23 years old</motion.h4>
        <motion.p {...Fade}>
          When my journey in the digital world begon, I discovered a strong
          passion for web development and fell in love with writing code. The
          fact that I could make something visual with a few lines of code blew
          my mind and motivated me to dig dieper into the possibilities of the
          web! And by doing so, I started to love the world of frontend and
          backend development!
        </motion.p>
        <OutlinedButton {...Fade}>Learn More</OutlinedButton>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
