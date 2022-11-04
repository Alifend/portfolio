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
        <a href="https://github.com/Alifend" target="_blank">
          <li>
            <Logo src="/github.svg" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/anfece/" target="_blank">
          <li>
            <Logo src="/linkedin.svg" />
          </li>
        </a>
        <a href="mailto: andres.celis@correounivalle.edu.co">
          <li>
            <Logo src="/email.svg" />
          </li>
        </a>
      </ul>
      <p>“The great aim of education is not knowledge but action.”</p>
      <p>Copyright © 2022 Andrés Celis</p>
    </StyledFooter>
  );
};

export default Footer;
