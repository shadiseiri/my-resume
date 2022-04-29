import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import React from "react";
import { FooterContainer, FooterWrapper, SocialIconsLink, SocialMediaWrapper, WebSiteRights } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaWrapper>
          <SocialIconsLink href="https://github.com/shadiseiri" >
            <FaGithub />
          </SocialIconsLink>
          <SocialIconsLink>
            <FaLinkedinIn />
          </SocialIconsLink>
          <SocialIconsLink>
            <FaTwitter />
          </SocialIconsLink>
        </SocialMediaWrapper>
        <WebSiteRights>&copy; 2022 Shadi Seiri. All rights reserved.</WebSiteRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
