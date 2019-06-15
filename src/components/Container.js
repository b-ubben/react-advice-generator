import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  max-width: 42rem;
`;

const SmallParagraph = styled.p`
  font-size: var(--font-size-small);
`;

const BodyCopy = () => (
  <>
    <p>Click the button below to generate a random piece of advice!</p>
    <SmallParagraph><strong>Disclaimer:</strong> I'm using an API that I picked on a whim, so I don't guarantee that it will be good advice, and I have NOT read all of the advice that it may generate.</SmallParagraph>
  </>
);

const Container = ({ children }) => (
  <MainContainer>
    <BodyCopy/>
    { children }
  </MainContainer>
);

export default Container;
