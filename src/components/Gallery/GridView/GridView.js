import React from 'react';
import styled from 'styled-components';

const PictureWrapper = styled.div`
  position: relative;
  width: 30%;
  padding: 16px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin-bottom: 4.5rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s ease;
    background-color: #f2f0f0;
  }

  @media(max-width: 992px) {
    width: 40%;
  }

  @media(max-width: 768px) {
    width: 90%;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const Resolution = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  text-align: left;

  @media(max-width: 426px) {
    font-size: 1.3rem;
  }
`;

const Author = styled.p`
  position: absolute;
  font-size: 1.8rem;
  bottom: 7rem;
  left: 3.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;

  @media(max-width: 426px) {
    font-size: 1.6rem;
  }
`;

const GridView = (props) => (
  <PictureWrapper>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.src} alt={props.author} />
      <Author>{props.author}</Author>
      <div>
        <Resolution>Height: {props.height}</Resolution>
        <Resolution>Width: {props.width}</Resolution>
      </div>
    </a>
  </PictureWrapper>
);

export default GridView;
