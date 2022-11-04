import styled from "styled-components";

export const StyledProjects = styled.section`
  color: white;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 2rem;
  padding-block: 2rem;
  h3 {
    font-size: var(--font-size-5);
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  }
`;
