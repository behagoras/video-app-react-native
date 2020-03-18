import React from 'react';
import Layout from './MovieLayout';
import Player from '../../player/Player';
import {View, Text} from 'react-native';
import Header from '../../sections/Header';

const Movie = () => {
  return (
    <Layout>
      <Header />
      <Player />
    </Layout>
  );
};

export default Movie;
