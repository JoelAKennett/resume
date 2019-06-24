import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  background-color: #010400;
  color: #ffffff;
  min-height: 200px;
`;

const SkillDescription = ({ description }) => (
  <DescriptionContainer>{description}</DescriptionContainer>
);

SkillDescription.propTypes = {
  description: PropTypes.string,
};

SkillDescription.defaultProps = {
  description: '',
};

export default SkillDescription;
