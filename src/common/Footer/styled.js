import styled from "styled-components";
import { ReactComponent as IconGitHub } from "../Icons/footerGitHubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../Icons/linkedIcon.svg";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 20%;
  align-items: flex-end;
`;

export const IconFooterGitHub = styled(IconGitHub)`
  width: 48px;
  height: 48px;
`;

export const IconLickedIn = styled(LinkedInIcon)`
  width: 48px;
  height: 48px;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  fill: ${({ theme }) => theme.primary.text};
  &:hover {
    transition: 0.3s ease;
  }
`;
