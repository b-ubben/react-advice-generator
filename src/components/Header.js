import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgb(116,221,103);
  background: linear-gradient(145deg, rgba(116,221,103,1) 0%, rgba(235,231,56,1) 19%, rgba(233,213,0,1) 52%, rgba(0,212,255,1) 93%);
  border: 4px solid rgba(116,221,103,1);
  border-top: none;
  padding: 4rem 0;
  text-align: center;
`;

const HeaderCopy = styled.p`
  color: var(--light);
  font-weight: bold;
  text-shadow: var(--shadow);

  @media (max-width: 420px) {
    padding-left: 3rem;
    text-align: left;
  }
`;

const HeaderTitle = styled.h1`
  color: var(--light);
  font-size: calc(4rem + 0.25vw);
  text-shadow: var(--shadow);

  @media (max-width: 420px) {
    padding-left: 2rem;
    text-align: left;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Need some advice?</HeaderTitle>
    <HeaderCopy>Look no further!</HeaderCopy>
  </HeaderContainer>
);

export default Header;
