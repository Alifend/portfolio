import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  flex-grow: 1;
  height: 250px;
  padding: 10px;
  position: relative;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.6s ease;
  .image {
    border-radius: 12px;
  }
  &:hover {
    transform: scale(1.05);
    .image {
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
  overflow: hidden;
  h4 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    overflow: hidden;
    width: 80%;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    text-align: center;
  }
  .button {
    width: auto;
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
