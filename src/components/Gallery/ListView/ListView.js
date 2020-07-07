import React from 'react';
import styled from 'styled-components';

import Button from '../../Button/Button';

const InnerWrapper = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin-right: 2rem;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  box-sizing: border-box;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }

  @media(max-width: 500px) {
    margin-bottom: 9rem;
    border: none;
    box-shadow: none;
  }
`;

const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.4;
  position: relative;

  @media(max-width: 500px) {
    flex-direction: column;
  }

  img {
    width: 18%;
    height: auto;
    object-fit: cover;
    border-radius: 0.25rem;

    @media(max-width: 992px) {
      width: 40%;
    }

    @media(max-width: 500px) {
      width: 96%;
      margin: auto;
    }
  }
`;

const Info = styled.div`
  display: flex;
  margin-left: 1%;
  width: 50%;

  @media(max-width: 992px) {
    margin-left: 2%;
  }

  @media(max-width: 500px) {
    margin-left: 3%;
  }

  @media(max-width: 500px) {
    width: 96%;
    margin-top: 3%;
    margin-bottom: 2%;
  }
`;

const Date = styled.div`
  span {
    color: #a3a0a2;
    font-size: 1.1rem;
    display: block;
    text-align: center;
  }

  span:last-child {
    font-weight: bold;
    font-size: 2rem;
  }
`;

const Time = styled.div`
  margin-left: 2%;

  @media(max-width: 992px) {
    margin-left: 4%;
  }

  @media(max-width: 500px) {
    margin-left: 5%;
  }

  span {
    text-align: left;
    display: block;
    font-size: 1.1rem;
  }

  span:first-child {
    color: #f037b9;
    font-weight: bold;
  }

  span:nth-child(n+2) {
    color: black;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  span:nth-child(2) {
    font-weight: bold;
  }

  span:nth-child(3) {
    font-weight: normal;
  }
`;

const ListView = (props) => (
  <InnerWrapper>
    <PictureWrapper>
      <img src={props.src} alt={props.author} />
      <Info>
        <Date>
          <span>MAR</span>
          <span>21</span>
        </Date>
        <Time>
          <span>Thu 21.15</span>
          <span>{props.author}</span>
          <span>Width: {props.width}, Height: {props.height}</span>
        </Time>
      </Info>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <Button>Find pics</Button>
      </a>
    </PictureWrapper>
  </InnerWrapper>
);

export default ListView;
