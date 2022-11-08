import React from "react";
import styled from "styled-components";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  const Logo = styled.img`
    width: 25px;
    height: 25px;
    filter: brightness(0) invert(1);
  `;
  return (
    <StyledFooter>
      <ul className="links-list">
        <li>
          <a href="https://github.com/Alifend" target="_blank">
            <Logo alt="Github logo" src="/github.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anfece/" target="_blank">
            <Logo alt="Linkedin logo" src="/linkedin.svg" />
          </a>
        </li>
        <li>
          <a href="mailto: andres.celis@correounivalle.edu.co">
            <Logo alt="email logo" src="/email.svg" />
          </a>
        </li>
      </ul>
      <p>“The great aim of education is not knowledge but action.”</p>
      <p>Copyright © 2022 Andrés Celis</p>
    </StyledFooter>
  );
};

export default Footer;
