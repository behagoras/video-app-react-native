import React from 'react';
import styled from 'styled-components/native';

const Separator = styled.View`
  border-top-width: 1px;
  border-top-color: ${props => props.color};
`;

const VerticalSeparator = ({color}) => <Separator color={color || '#eaeaea'} />;

export default VerticalSeparator;
