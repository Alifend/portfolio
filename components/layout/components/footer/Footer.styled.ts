import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-purple-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 10rem;
  padding-bottom: 4rem;
  .links-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    li {
      border-radius: 50%;
      height: 60px;
      width: 60px;
      border: 3px solid rgba(255, 255, 255, 0.5);
      list-style: none;
      display: grid;
      place-content: center;
      transition: all 0.3s ease;
    }
    li:hover {
      transform: scale(1.1);
      border: 3px solid white;
    }
  }
`;
