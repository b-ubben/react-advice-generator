import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';

const AppContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
`;

const App = () => (
  <>
    <GlobalStyle/>
    <AppContainer>
      <Header/>
    </AppContainer>
  </>
);

export default App;
