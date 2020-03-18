import React from 'react';
import ControlButton from './ControlButton';
import {Close} from '../../Icons';

const PlayPause = ({onPress, paused}) => {
  return <ControlButton onPress={onPress} paused={paused} text={<Close />} />;
};

export default PlayPause;
