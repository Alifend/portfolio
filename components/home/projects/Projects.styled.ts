import styled from "styled-components";

export const StyledProjects = styled.section`
  padding-inline: 2rem;
  padding-block: 2rem;
  color: white;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: 2rem;
  padding-inline: 5rem;

  .projectsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .buttonsBox {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  h3 {
    font-size: var(--font-size-10);
  }
  h5 {
    font-size: var(--font-size-15);
    font-weight: var(--fw-weight-500);
    color: rgba(255, 255, 255, 0.624);
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  }

  @media screen and (max-width: 768px) {
    .projectsContainer {
      /* gap: 0.5rem; */
    }
  }
`;
