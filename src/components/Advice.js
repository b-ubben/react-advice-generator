import React from 'react';
import styled from 'styled-components';

// Styled components
const AdviceContainer = styled.article`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  margin: 4.6rem auto;
  padding: 0 2rem;
`;

const AdviceButtonContainer = styled.section`
  display: flex;
    align-items: center;
    justify-content: center;
`;

const FetchedAdvice = styled.p`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: var(--shadow);
  color: var(--secondary);
  margin-top: 3rem;
  opacity: 0.97;
  padding: 2rem;
`;

const StyledButton = styled.button`
  background: var(--gradient-base);
  background: var(--gradient);
  border: 3px solid var(--light);
  border-radius: 100px;
  box-shadow:
    1px 4px 16px rgba(116,221,103, 0.16),
    3px 7px 15px rgba(116,221,103, 0.17);
  color: var(--light);
  display: block;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: var(--shadow), var(--shadow);
  outline: none;
  padding: 0.75rem 1rem;
  width: 275px;

  &:hover {
    border: 3px solid var(--gradient-base);
  }

  &:focus {
    border: 3px solid var(--dark);
  }
`;

// Function components
const AdviceButton = props => {
  const { onClick } = props;

  return(
    <AdviceButtonContainer>
      <StyledButton onClick={ e => onClick(e) }>Get Advice</StyledButton>
    </AdviceButtonContainer>
  );
};

const Advice = () => {
  const [advice, setAdvice] = React.useState('Your advice will show up here..');

  async function fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const { slip } = await response.json();
    const { advice } = await slip;

    return advice;
  }

  function handleClick() {
    fetchAdvice()
      .then((advice) => {
        setAdvice(advice);
      })
      .catch(err => new Error(err))
  }

  return(
    <AdviceContainer>
      <AdviceButton onClick={ handleClick }/>
      <FetchedAdvice>{ advice }</FetchedAdvice>
    </AdviceContainer>
  );
};

export default Advice;
