import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

const Container = styled.View`
  padding-top: 56.25%;
  height: 200px;
`;

const Video = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
`;

const Overlay = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const PlayerLayout = props => {
  // console.log('props.loading', props.loading);
  return (
    <Container>
      <Video>{props.video}</Video>
      <Overlay>{props.loading && props.loader}</Overlay>
      {props.controls}
    </Container>
  );
};

export default PlayerLayout;
