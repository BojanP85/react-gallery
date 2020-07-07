import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  padding-left: ${props => (props.List ? "2rem" : "0")};
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${props => (props.List ? "2.5rem" : "1.5rem")};

  @media(max-width: 500px) {
    padding-left: ${props => (props.List ? "2.85rem" : "0")};
  }

  @media(max-width: 426px) {
    padding-left: ${props => (props.List ? "2.75rem" : "0")};
  }

  @media(max-width: 375px) {
    padding-left: ${props => (props.List ? "2.6rem" : "0")};
  }

  hr {
    margin-left: 0;
    width: 3rem;
    height: 0.2rem;
    border: none;
    background-color: #cccfcd;
  }
`;

const Title = ({ children, List }) => (
  <Wrapper List={List}>
    {children}
    <hr />
  </Wrapper>
);

export default Title;
