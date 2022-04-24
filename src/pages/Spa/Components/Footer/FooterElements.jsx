import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  max-width: 1100px;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #f7f8fa;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #f7f8fa;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #fab209;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

export const SocialMediaContainer = styled.div`
  max-width: 100%;
  width: 1100px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #f7f8fa;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  justify-self: start;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebSiteRights = styled.small`
  color: #f7f8fa;
  margin-bottom: 16px;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: #f7f8fa;
  font-size: 24px;
  cursor: pointer;
`;
