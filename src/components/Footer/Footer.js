import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  text-align: center;
  padding: 2rem 0 1rem 0;

  span:first-child {
    font-size: 1.3rem;
    margin-right: 0.5rem;
  }

  span:last-child {
    font-size: 1.8rem;
    font-style: italic;
  }
`;

const Footer = () => (
  <Wrapper><span>Powered by</span> <span>ticketmaster</span></Wrapper>
);

export default Footer;
