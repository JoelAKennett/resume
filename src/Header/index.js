import React from 'react';
import styled from 'styled-components';
import photo from './placeholderImage.jpeg';

const HeaderContainer = styled.header`
  background-color: #7E1F27;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 15rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  max-height: 12rem;
`;

const Name = styled.h1`
  margin: 0;
  color: #010400;
  font-size: 3rem;
  padding: 1rem 0;
`;

const Position = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #010400;
`;

const Header = () => (
  <HeaderContainer>
    <Photo src={photo} alt="Headshot of Joel Kennett" />
    <TextContainer>
      <Name>Joel Kennett Resume</Name>
      <Position>Javascript Software Developer</Position>
    </TextContainer>
  </HeaderContainer>
);

export default Header;
