import { gitHub, linkedin } from "../Contact/personalContact";
import {
  FooterLink,
  FooterWrapper,
  IconFooterGitHub,
  IconLickedIn,
} from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLink 
       href={gitHub} 
       rel="noopener noreferrer" 
       target="_blank">
        <IconFooterGitHub />
      </FooterLink>
      <FooterLink 
       href={linkedin} 
       rel="noopener noreferrer" 
       target="_blank">
        <IconLickedIn />
      </FooterLink>
    </FooterWrapper>
  );
};
