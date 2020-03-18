import React from 'react';
import {connect} from 'react-redux';
import Layout from './MovieLayout';
import Player from '../../player/Player';
import {View, Text} from 'react-native';
import Header from '../../sections/Header';
import {CloseButton} from '../../player/Buttons';

const Movie = props => {
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: null,
    });
    console.log('closing video');
  };
  return (
    <Layout>
      <Header>
        <CloseButton onPress={closeVideo} />
      </Header>
      <Player />
    </Layout>
  );
};

export default connect(null)(Movie);
