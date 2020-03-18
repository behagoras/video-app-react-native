import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import API from './utils/api';

import Home from './containers/Home';
import Header from './components/sections/Header';
import SuggestionList from './components/videos/Suggestion/SuggestionList';
import CategoryList from './components/videos/Category/CategoryList';
import Movie from './components/videos/Movie/Movie';

const AppLayout = props => {
  // console.log('props in AppLayout', props);
  useEffect(() => {
    const fetchData = async () => {
      const suggestionList = await API.getSuggestion(2);
      const categoryList = await API.getMovies();
      // console.log('props.dispatch', props.dispatch);
      props.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          suggestionList,
        },
      });
      props.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          categoryList,
        },
      });

      // props.setSuggestionList(suggestionList);
      // props.setCategoryList(categoryList);
    };
    fetchData();
  }, []);
  if (props.selectedMovie) {
    return <Movie />;
  }
  return (
    <Home>
      <Header />
      {/* <Text>Buscador</Text> */}
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

// const
const mapDispatchToProps = dispatch => {
  return {
    setCategoryList: () => dispatch({type: 'SET_CATEGORY_LIST'}),
    setSuggestionList: () => dispatch({type: 'SET_SUGGESTION_LIST'}),
  };
};
const mapStateToProps = state => {
  const {selectedMovie} = state.videos;
  return {
    selectedMovie,
  };
};

export default connect(
  mapStateToProps,
  null,
)(AppLayout);
