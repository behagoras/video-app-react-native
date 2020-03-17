import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableHighlight`
  justify-content: center;
  padding: 0 10px;
  height: 25px;
  margin: 5px 10px;
  border: solid 1px white;
  border-radius: 10px;
  background-color: gray;
`;
const Button = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const PlayerButton = props => {
  const {text} = props;
  return (
    <Container
      onPress={props.onPress}
      underlayColor="blue"
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}>
      <Button>{text}</Button>
    </Container>
  );
};

export default PlayerButton;
