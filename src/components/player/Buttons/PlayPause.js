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

const PlayPause = props => {
  return (
    <Container
      onPress={props.onPress}
      underlayColor="blue"
      hitSlop={{
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      }}>
      {props.paused ? <Button>▶️</Button> : <Button>⏸️</Button>}
    </Container>
  );
};

export default PlayPause;
