import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Container from './components/Container';
import Advice from './components/Advice';
import Footer from './components/Footer';

const AppContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
`;

const App = () => (
  <>
    <GlobalStyle/>
    <AppContainer>
      <Header/>
      <Container>
        <Advice/>
      </Container>
      <Footer/>
    </AppContainer>
  </>
);

export default App;
