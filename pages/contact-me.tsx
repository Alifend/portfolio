import React from "react";
import styled from "styled-components";
import {
  OutlinedButton,
  SubTitle,
  Title,
} from "../components/common/Common.styled";
import Layout from "../components/layout";

const Poderoso = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewOutlinedButton = styled(OutlinedButton)`
  width: 100%;
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* margin-top: 5rem; */
  width: min(90%, 500px);
  background-color: var(--color-gray-100);
  border-radius: 12px;
  padding: 2rem;
  height: auto;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border-radius: 12px;
  height: 40px;
  border: none;
  color: black;
  padding-inline: 0.8rem;
  margin-bottom: 1.5rem;
  //delete border when focus
  &:focus {
    outline: none;
  }
`;
const ContactMe = () => {
  return (
    <Poderoso>
      <FormContainer>
        <Title>Contact me</Title>
        <SubTitle style={{ marginBlock: "1rem" }}>
          Questions? Send a message
        </SubTitle>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Name" type="text" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Email" type="email" />
        <Label htmlFor="message">Message</Label>
        <Input
          id="message"
          placeholder="Message"
          style={{ height: "100px" }}
          type="text"
        />
        <NewOutlinedButton>Message</NewOutlinedButton>
      </FormContainer>
    </Poderoso>
  );
};

ContactMe.layout = Layout;
export default ContactMe;
