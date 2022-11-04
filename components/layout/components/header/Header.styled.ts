import styled from "styled-components";
import Link from "next/link";

interface Props {
  position: string | number;
}
interface LinkProps {
  isactive: boolean;
}
export const StyledLink = styled(Link)<LinkProps>`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding: 16px 20px;
  transition: background-color 0.3s ease;
  border-radius: 12px;
  color: ${(props) => (props.isactive ? "#fff" : "#bbb")};
  &:hover {
    background-color: #494949;
    color: white;
  }
`;

export const StyledHeader = styled.header<Props>`
  position: fixed;
  z-index: 10;
  padding-inline: 1rem;
  width: 100%;
  height: 70px;
  transition: background-color 0.6s ease;
  background-color: ${(props) =>
    props.position == "0"
      ? "background: rgba(0,0,0,0.5);"
      : "var(--color-gray-300)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bdbdbd;
  h3 {
    font-size: 1.17rem;
    font-weight: var(--font-weight-3);
  }
  nav {
    ul {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      transition: left 0.6s ease;
    }
  }
  .menu {
    display: none;
    filter: invert(99%) sepia(2%) saturate(2%) hue-rotate(244deg)
      brightness(104%) contrast(100%);
    height: 50px;
    width: 50px;
  }
  @media (max-width: 768px) {
    nav > ul {
      position: absolute;
      justify-content: flex-start;
      top: 70px;
      left: 0;
      width: 100vw;
      height: calc(100vh - 70px);
      background-color: #333;
      flex-direction: column;
    }
    .menu {
      display: block;
    }
  }
`;

export const Nav = styled.nav``;
