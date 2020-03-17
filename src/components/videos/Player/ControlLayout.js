import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  height: 35px;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
`;

const ControlLayout = props => {
  return <Container>{props.children}</Container>;
};

export default ControlLayout;
