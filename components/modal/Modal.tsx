import Image from "next/image";
import { FC, SyntheticEvent, useEffect } from "react";
import styled from "styled-components";
type Props = {
  image: string;
};

type ModalProps = {
  visible: boolean;
  // onClick: (e: SyntheticEvent) => void;
};

const ImageContainer = styled.figure`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledModal = styled.div<ModalProps>`
  transition: all 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  z-index: ${({ visible }) => (visible ? 1 : -1)};
  position: fixed;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90%, 900px);
  height: auto;
  border-radius: 8px;
  padding: 0.2rem;
  // This be the blur
  background: rgba(255, 255, 255, 0.2);
`;

const CloseButton = styled.button`
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: gray;
  z-index: 2;
  border: none;
  border-radius: 6px;
`;
const Modal: FC<Props> = ({ image }) => {
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };
  if (image === "") return null;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(8px)",
        background: "rgba(255, 255, 255, 0.2)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <StyledModal visible={image ? true : false}>
        {image && (
          <CloseButton onClick={(e) => e}>
            <img alt="close" src="/close.svg" />
          </CloseButton>
        )}
        <ImageContainer onClick={handleClick}>
          {image && (
            <Image
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              src={image}
              alt=""
              width={900}
              height={700}
              quality="100"
              sizes="(max-width: 2000px) 1000px"
            />
          )}
        </ImageContainer>
      </StyledModal>
    </div>
  );
};

export default Modal;
