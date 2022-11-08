import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledHeader, StyledLink } from "./Header.styled";

const Header = () => {
  const [position, setPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const setPositionScroll = () => {
    setPosition(window.scrollY);
  };

  const isActive = (name: string) => {
    return router.pathname == name;
  };
  useEffect(() => {
    window.addEventListener("scroll", setPositionScroll);
    setPositionScroll();
    return () => {
      window.removeEventListener("scroll", setPositionScroll);
    };
  }, []);

  return (
    <StyledHeader position={position}>
      <h3>Andrés Felipe Celis</h3>
      <nav>
        <ul
          onClick={() => setShowMenu(true)}
          style={showMenu ? { left: "0" } : { left: "-100%" }}
        >
          <StyledLink scroll={false} isactive={isActive("/")} href="/">
            Home
          </StyledLink>
          <StyledLink
            scroll={false}
            isactive={isActive("/about-me")}
            href="/about-me"
          >
            About me
          </StyledLink>
          <StyledLink
            scroll={false}
            isactive={isActive("/portfolio")}
            href="/portfolio"
          >
            Portfolio
          </StyledLink>
          <StyledLink
            scroll={false}
            isactive={isActive("/contact-me")}
            href="/contact-me"
          >
            Contact me
          </StyledLink>
        </ul>
      </nav>
      <motion.img
        className="menu"
        initial={{ rotate: 0 }}
        exit={{ rotate: 0 }}
        animate={{ rotate: showMenu ? 90 : 0 }}
        src={showMenu ? "/close.svg" : "/menu.svg"}
        onClick={() => setShowMenu(!showMenu)}
      />
      {/* <h5 onClick={() => setShowMenu(!showMenu)}>Hamburguesa</h5> */}
    </StyledHeader>
  );
};

export default Header;
