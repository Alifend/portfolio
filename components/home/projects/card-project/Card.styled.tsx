import styled from "styled-components";

interface CardProps {
  url: string;
}

export const Card = styled.div<CardProps>`
  width: 300px;
  flex-grow: 1;
  height: 250px;
  padding: 10px;
  position: relative;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.6s ease;
  &:before {
    content: "";
    background-image: url(${(props) => props.url});
    /* background-image: url("https://areajugones.sport.es/wp-content/uploads/2022/09/cyberpunk-edgerunners-8.jpg"); */
    background-size: cover;
    position: absolute;
    border-radius: 12px;
    z-index: 0;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  &:hover {
    transform: scale(1.05);
    &:before {
      transition: opacity 0.5s ease;
      opacity: 0.4;
    }
    .chips {
      opacity: 0;
    }
    .hover {
      opacity: 1;
    }
  }
`;

export const HoverInfo = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  h4 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
  }
  button {
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--color-purple-100);
    border: none;
  }
`;
export const Chip = styled.span`
  padding: 0.4rem;
  background-color: var(--color-gray-100);
  border-radius: 10px;
  z-index: 1;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  transition: opacity 0.5s ease;
  opacity: 1;
`;
