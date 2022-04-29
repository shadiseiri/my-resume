import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: 800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#3e086a ")};
  color: #010606;
  
`;

export const ContactForm = styled.form`
  display: block;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1100px;
  width: 100%;
`;

export const ContactRowWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const ContactInputWrapper = styled.div`
  margin: 0 10px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #3e086a;
  outline: none;
  padding: 5px;
  background-color: transparent;
  color: #010606;

  /* font-weight: 700; */

/* Change the white to any color */
/* input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 30px transparent inset !important;
} */
  &::placeholder {
    color: #747373;
  }

  &:focus {
    border-bottom: 2px solid #4d7ec1;
  }
`;


export const ContactTextarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #3e086a;
  padding: 5px;
  background-color: transparent;
  color: #010606;

  /* font-weight: 700; */

  &::placeholder {
    color: #747373;
  }

  &:focus {
    border-bottom: 2px solid #4d7ec1;
  }
`;

export const ContactSubmit = styled.button`
  width: 100%;
  border: none;
  /* border-bottom: 1px solid #ccc; */
  cursor: pointer;
  border-radius: 50px;
  background-color: #4c77bc;
  padding: 14px 48px;
  color: #fff;
  font-size: 18px;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #3e086a;
    background-color: #fff;
    border: 2px solid #3e086a;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
