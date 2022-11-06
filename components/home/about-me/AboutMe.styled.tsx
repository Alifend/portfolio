import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAboutMe = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  background-color: var(--color-gray-100);
  max-width: 100vw;
  height: auto;
  padding: 3rem;

  & > figure {
    min-width: 300px;
    min-height: 300px;
    position: relative;
  }
  & > div {
    width: max(50%, 600px);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > h3 {
      font-size: var(--font-size-10);
      font-weight: var(--font-weight-3);
    }
    & > h4 {
      font-size: var(--font-size-11);
      font-weight: var(--font-weight-500);
      color: rgba(255, 255, 255, 0.624);
    }
    & > p {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: var(--font-size-12);
      line-height: 1.8;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem;
    & > div {
      width: 100%;
    }
  }
`;
