import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Header = styled.h1`
  display: flex;
  justify-content: end;
  margin-top: 7rem;
  margin-right: 20%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.2em;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
  margin-right: 20%;
  font-size: 2rem;
  font-family: "Philosopher", sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.2rem;
  }
`;
