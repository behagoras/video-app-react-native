import React from 'react';
import {connect} from 'react-redux';
import Layout from './MovieLayout';
import Player from '../../player/Player';
import {View, Text} from 'react-native';
import Header from '../../sections/Header';
import {CloseButton} from '../../player/Buttons';
import Details from '../../sections/Details';

const Movie = props => {
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: null,
    });
    console.log('closing video');
  };
  console.log('props.movie', props.movie);

  return (
    <Layout>
      <Header>
        <CloseButton onPress={closeVideo} />
      </Header>
      <Player />
      <Details {...props.movie} />
    </Layout>
  );
};

const mapStateToProps = state => {
  console.log('superstate', state);
  return {
    movie: state.videos.selectedMovie ? state.videos.selectedMovie.movie : {},
  };
};

export default connect(mapStateToProps)(Movie);
