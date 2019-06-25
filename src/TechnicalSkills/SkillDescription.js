import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  background-color: #010400;
  color: #ffffff;
  min-height: 200px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 1rem;
`;

const ReactDescription = () => (
  <StyledParagraph>REACT</StyledParagraph>
);

const NodeDescription = () => (
  <StyledParagraph>NODE.JS</StyledParagraph>
);

const DockerDescription = () => (
  <StyledParagraph>DOCKER</StyledParagraph>
);

const AWSDescription = () => (
  <StyledParagraph>AWS</StyledParagraph>
);

const MongodbDescription = () => (
  <StyledParagraph>MONGODB</StyledParagraph>
);

const descriptionMap = {
  react: <ReactDescription />,
  node: <NodeDescription />,
  docker: <DockerDescription />,
  aws: <AWSDescription />,
  mongodb: <MongodbDescription />,
};

const SkillDescription = ({ description }) => (
  <DescriptionContainer>{_.get(descriptionMap, description)}</DescriptionContainer>
);

SkillDescription.propTypes = {
  description: PropTypes.string,
};

SkillDescription.defaultProps = {
  description: '',
};

export default SkillDescription;
