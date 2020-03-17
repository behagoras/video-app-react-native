import React from 'react';
import styled from 'styled-components/native';
import {PlayPause} from './';
import FullScreenButton from './FullScreenButton';
import StatusBar from '../StatusBar';
import {fancyTime} from '../../../utils/time';

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
const CurrentTime = styled.Text`
  color: white;
  margin-left: 10px;
`;

const ControlLayout = props => {
  const {playPause, progress, currentTime, handleFullScreen, paused} = props;
  return (
    <Container>
      <PlayPause onPress={playPause} paused={paused} />
      <StatusBar progress={progress} />
      <CurrentTime>{fancyTime(currentTime)}</CurrentTime>
      <FullScreenButton onPress={handleFullScreen} paused={paused} />
    </Container>
  );
};

export default ControlLayout;
