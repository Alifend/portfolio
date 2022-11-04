import styled from "styled-components";

export const StyledContactMe = styled.section`
  color: white;
  background-color: var(--color-gray-200);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 280px;
  .card {
    position: absolute;
    bottom: -120px;
    background-color: #3a3b3f;
    width: min(90%, 900px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2.4rem;
    border-radius: 12px;
    font-weight: var(--font-weight-1);
  }
  h4 {
    font-size: var(--font-size-5);
  }
  h5 {
    font-size: var(--font-size-1);
    text-align: center;
    color: rgb(212, 212, 212);
  }
`;
