import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { OutlinedButton } from "../components/common/Common.styled";

const StyledLink = styled(Link)`
  position: absolute;
  left: 100px;
  bottom: 50px;
`;

const Container = styled.div`
  width: 100vw;
  height: 99vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Error: FC = () => {
  return (
    <Container>
      <StyledLink href="/">
        <OutlinedButton>Go back</OutlinedButton>
      </StyledLink>
      <Image src="/404.svg" alt="404" />
    </Container>
  );
};

export default Error;
