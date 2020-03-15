import styled, {css} from 'styled-components/native';
import React from 'react';
import {Platform} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: css`
      background-color: #f5fcff;
    `,
    android: css`
      background-color: #f5fcff;
    `,
  })};
`;

const Welcome = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

const Logo = styled.Image`
  width: 300px;
  height: 80px;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`;

const App = () => {
  return (
    <>
      <Container>
        <Logo source={require('./assets/logo.png')} />
        <Welcome>Welcome to React Native!</Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    </>
  );
};

export default App;
