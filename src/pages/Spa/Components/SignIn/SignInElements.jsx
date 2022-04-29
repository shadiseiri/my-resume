import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
display: flex;
justify-content: center;
  background: #f9f9f9;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  margin: 0 grid-auto-flow;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Form = styled.form`
  background: transparent;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #010606;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #010606;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 50px;
  border: none;
  border-radius: 4px;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: none;

  &:focus {
    outline: none;
    border-bottom: 1px solid #fab209;
  }
`;

export const FormButton = styled.button`
  border-radius: 50px;
  white-space: nowrap;
  background: #fab209;
  padding: 14px 48px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #fff;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
