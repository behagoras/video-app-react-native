import React from 'react';
import Layout from './MovieLayout';
import Player from '../../player/Player';
import {View, Text} from 'react-native';

const Movie = () => {
  return (
    <Layout>
      <Player />
    </Layout>
  );
};

export default Movie;
