import React from 'react';
import ControlButton from './ControlButton';
import {FullScreen} from '../../Icons';

const FullScreenButton = ({onPress, paused}) => {
  return (
    <ControlButton
      onPress={onPress}
      paused={paused}
      text={<FullScreen onPress={onPress} />}
    />
  );
};

export default FullScreenButton;
