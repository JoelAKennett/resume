import React, { Fragment } from 'react';
import styled from 'styled-components';

import SkillDescription from './SkillDescription';

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

class TechnicalSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: '', showDescription: false };
  }

  handleClick(description) {
    this.setState({ description, showDescription: true });
  }

  render() {
    const { description, showDescription } = this.state;
    return (
      <Fragment>
        <StyledHeading>Technology Stack:</StyledHeading>
        <SkillList>
          <li><SkillButton type="button" onClick={() => this.handleClick('react')}>React</SkillButton></li>
          <li><SkillButton type="button" onClick={() => this.handleClick('node')}>Node.js</SkillButton></li>
          <li><SkillButton type="button" onClick={() => this.handleClick('docker')}>Docker</SkillButton></li>
          <li><SkillButton type="button" onClick={() => this.handleClick('aws')}>AWS</SkillButton></li>
          <li><SkillButton type="button" onClick={() => this.handleClick('mongodb')}>MongoDB</SkillButton></li>
        </SkillList>
        { showDescription && <SkillDescription description={description} /> }
      </Fragment>
    );
  }
}

export default TechnicalSkills;
