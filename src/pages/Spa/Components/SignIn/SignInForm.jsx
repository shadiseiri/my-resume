import React from "react";
import { HiHome } from "react-icons/hi";
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrapper, Icon, Text } from "./SignInElements";

const SignInForm = () => {
  return (
    <Container>
      <FormWrapper>
        <Icon to="/"><HiHome/></Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlfor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlfor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forger Password</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default SignInForm;
