import { motion } from "framer-motion";
import styled from "styled-components";

export const OutlinedButton = styled(motion.button)`
  border-radius: 12px;
  padding: 1.4rem 1rem;
  border: 3px solid var(--color-green-100);
  background-color: inherit;
  color: white;
  font-size: var(--font-size-13);
  height: 30px;
  width: 150px;
  display: grid;
  place-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--color-green-100);
  }
`;

export const ContainedButton = styled(motion.button)`
  padding: 1.4rem 1rem;
  border-radius: 10px;
  height: 30px;
  width: 150px;
  font-size: var(--font-size-13);
  background-color: var(--color-purple-100);
  border: none;
  display: grid;
  place-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--color-purple-200);
  }
`;

export const Title = styled(motion.h3)`
  font-size: var(--font-size-10);
  font-weight: var(--font-weight-3);
`;

export const Paragraph = styled(motion.p)`
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-300);
`;

export const SubTitle = styled(motion.h4)`
  font-size: var(--font-size-15);
  font-weight: var(--font-weight-500);
`;
