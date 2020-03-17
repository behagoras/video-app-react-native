import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.Image`
  margin-bottom: 10px;
  resize-mode: contain;
  width: 200px;
  height: 80px;
`;

const Loading = props => {
  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <ActivityIndicator />
    </Container>
  );
};

export default Loading;
