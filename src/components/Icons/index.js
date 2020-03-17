import React from 'react';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlay, faPause, faArrowsAlt} from '@fortawesome/free-solid-svg-icons';

const Awesome = styled(FontAwesomeIcon)`
  color: white;
`;

export const Play = () => {
  return <Awesome icon={faPlay} />;
};
export const Pause = () => {
  return <Awesome icon={faPause} />;
};
export const FullScreen = () => {
  return <Awesome icon={faArrowsAlt} />;
};
