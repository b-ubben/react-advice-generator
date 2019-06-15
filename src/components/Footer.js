import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: var(--secondary);
  font-size: var(--font-size-small);
  padding: 3rem 1rem 1rem 1rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    Brandon Ubben &copy; All Rights Reserved
  </FooterContainer>
);

export default Footer;
