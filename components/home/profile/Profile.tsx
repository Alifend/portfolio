import React from "react";
import styled from "styled-components";
import { ContainedButton, OutlinedButton } from "../../common/Common.styled";
import { StyledProfile } from "./Profile.styled";

const FloatingButton = styled.button`
  @keyframes slidein {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  bottom: 100px;
  right: 100px;
  animation: slidein 2s ease-in-out infinite;
`;
const Profile = () => {
  return (
    <StyledProfile>
      {/* <FloatingButton /> */}
      <div>
        <h1>
          <p>Front</p>
          <p>
            <span>+</span> Backend
          </p>
          <p>
            <span>=</span> My Passion
            <span>.</span>
          </p>
        </h1>
        <h4>
          I am a <span>Full-Stack Developer</span> on an adventure in the
          digital world!
        </h4>
        <div className="buttons">
          <ContainedButton>Projects</ContainedButton>
          <OutlinedButton>Contact me</OutlinedButton>
        </div>
      </div>
      <figure>
        <video style={{ width: "100%" }} height="620" loop muted autoPlay>
          <source src="/asd.mp4" type="video/mp4"></source>
        </video>
      </figure>
    </StyledProfile>
  );
};

export default Profile;
