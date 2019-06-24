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

const TechnicalSkills = () => (
  <Fragment>
    <StyledHeading>Technology Stack:</StyledHeading>
    <SkillList>
      <li>React</li>
      <li>Node.js</li>
      <li>Docker</li>
      <li>AWS</li>
      <li>MongoDB</li>
    </SkillList>
  </Fragment>
);

export default TechnicalSkills;
