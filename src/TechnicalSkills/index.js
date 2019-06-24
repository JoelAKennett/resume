import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
  color: #FFFFFF;
  background-color: #30332E;
  margin: 0;
  padding: 1rem 0 0 1rem;
`;

const SkillList = styled.ul`
  color: #FFFFFF;
  background-color: #30332E;
  margin: 0;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  list-style-type: none;
`;

const SkillButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  background-color: inherit;
  color: inherit;
  padding: 1rem 2rem;
  border: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover, &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:focus {
    background-color: #010400;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const TechnicalSkills = () => (
  <Fragment>
    <StyledHeading>Technology Stack:</StyledHeading>
    <SkillList>
      <li><SkillButton type="button">React</SkillButton></li>
      <li><SkillButton type="button">Node.js</SkillButton></li>
      <li><SkillButton type="button">Docker</SkillButton></li>
      <li><SkillButton type="button">AWS</SkillButton></li>
      <li><SkillButton type="button">MongoDB</SkillButton></li>
    </SkillList>
  </Fragment>
);

export default TechnicalSkills;
