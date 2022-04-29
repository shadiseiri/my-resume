import React from "react";
// import { HiHome } from "react-icons/hi";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrapper,
  Text,
} from "./SignInElements";

const SignInForm = () => {
  return (
    <Container id="signin">
      <FormWrapper>
        <Form>
          <FormH1>Sign in to your account</FormH1>
          <FormLabel htmlfor="for">Email</FormLabel>
          <FormInput type="email" required />
          <FormLabel htmlfor="for">Password</FormLabel>
          <FormInput type="password" required />
          <FormButton type="submit">Continue</FormButton>
          <Text>Forger Password</Text>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SignInForm;
