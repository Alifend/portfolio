import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import ContactMe from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import { Content } from "./Layout.styled";

type DashboardLayoutProps = {
  children: React.ReactNode;
};
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200 },
};
const variantsCircle = {
  hidden: { scale: 65 },
  enter: { scale: 0 },
  exit: { scale: 65 },
};

const Circle = styled(motion.div)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  opacity: 1;
  background-color: var(--color-purple-100);
  z-index: 10;
  position: fixed;
  right: 5rem;
  top: 1rem;
`;

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Header />
      <Circle
        variants={variantsCircle}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5, times: [0, 0.2, 0.5, 0.8, 1] }}
      />
      <Content>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </Content>
      <ContactMe />
      <Footer />
    </>
  );
};

export default Layout;
