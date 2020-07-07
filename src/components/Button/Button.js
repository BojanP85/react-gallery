import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #f037b9;
  transition: background-color 0.3s ease;
  padding: ${props => (props.SearchButton ? "0.8rem 3rem" : "1rem 4rem")};
  border: ${props => (props.SearchButton ? "none" : "1px solid #e8114b")};
  border-radius: ${props => (props.SearchButton ? "0 2px 2px 0" : "3px")};
  position: ${props => (props.SearchButton ? "" : "absolute")};
  right: 0;
  bottom: 50%;
  margin-bottom: ${props => (props.SearchButton ? "" : "-2rem")};
  font-size: ${props => (props.SearchButton ? "" : "1.8rem")};
  font-weight: ${props => (props.SearchButton ? "" : "400")};

  @media(max-width: 768px) {
    margin-bottom: 0;
    bottom: 0;
  }

  @media(max-width: 500px) {
    width: ${props => (props.SearchButton ? "" : "96%")};
    left: 0;
    bottom: -45px;
    margin: auto;
  }

  &:hover {
    background-color: #bf138c;
  }
`;

const Button = ({ clicked, children, SearchButton }) => (
  <StyledButton onClick={clicked} SearchButton={SearchButton}>{children}</StyledButton>
);

export default Button;
