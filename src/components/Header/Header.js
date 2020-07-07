import React from 'react';
import styled from 'styled-components';

import Search from '../Search/Search';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 8rem;
  background-color: #000;
  text-align: center;
  padding: 0.5rem 0 1.5rem 0;
`;

const Header = (props) => (
  <Wrapper>
    <Search
      value={props.value}
      change={props.change}
      keyPress={props.keyPress}
      clicked={props.clicked}
    />
  </Wrapper>
);

export default Header;
