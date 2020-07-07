import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import Button from '../Button/Button';

const SearchInput = styled.input`
  border: none;
  border-radius: 2px 0 0 2px;
  outline: none;
  width: 25%;
  padding: 0.8rem 1rem;

  @media(max-width: 768px) {
    width: 40%;
}
`;

const SearchIcon = styled(FaSearch)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Search = (props) => (
  <>
    <SearchInput
      type="text"
      placeholder="Search for author"
      value={props.value}
      onChange={props.change}
      onKeyPress={props.keyPress}
    />
    <Button clicked={props.clicked} SearchButton>
      <SearchIcon />
    </Button>
  </>
);

export default Search;
