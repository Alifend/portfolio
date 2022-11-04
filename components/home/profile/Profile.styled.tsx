import styled from "styled-components";

export const StyledProfile = styled.section`
  display: flex;
  height: 101vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-200);

  @media (max-width: 768px) {
    flex-direction: column;
    figure {
      display: none;
    }
  }

  div {
    width: max(35%, 520px);
    height: auto;
    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
      font-size: var(--font-size-1);
    }
    h1 {
      font-size: var(--font-size-7);
      span {
        color: var(--color-green-100);
      }
    }
    h4 {
      margin-bottom: 1.5rem;
      font-family: "Roboto Mono";
      font-size: var(--font-size-14);
      font-weight: var(--font-weight-300);
      span {
        font-family: "Roboto Mono";
        color: var(--color-green-100);
        font-weight: var(--font-weight-300);
      }
    }
  }
  figure {
    width: max(35%, 400px);
    height: auto;
  }
`;
