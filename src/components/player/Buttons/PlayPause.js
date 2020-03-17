import React from 'react';
import ControlButton from './ControlButton';
import {Play, Pause} from '../../Icons';

const PlayPause = ({onPress, paused}) => {
  return (
    <ControlButton
      onPress={onPress}
      paused={paused}
      text={paused ? <Play onPress={onPress} /> : <Pause onPress={onPress} />}
    />
  );
};

export default PlayPause;
