import styled from "styled-components";


export const Button = styled.div`
  border-radius: 50px;
  white-space: nowrap;
  background-color: ${({ primary }) => (primary ? "#4c77bc" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  display: ${({ showBtn }) => (showBtn ? "flex" : "none")};

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    background-color: ${({ primary }) => (primary ? "#fff" : "#4c77bc")};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
    padding: ${({ big }) => (big ? "12px 40px" : "10px 28px")};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ fontBig }) => (fontBig ? "16px" : "14px")};
  }
`;
