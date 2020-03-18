import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import API from './utils/api';

import Home from './containers/Home';
import Header from './components/sections/Header';
import SuggestionList from './components/videos/Suggestion/SuggestionList';
import CategoryList from './components/videos/Category/CategoryList';
import Movie from './components/videos/Movie/Movie';

const AppLayout = props => {
  useEffect(() => {
    const fetchData = async () => {
      const suggestionList = await API.getSuggestion(2);
      const categoryList = await API.getMovies();
      props.setSuggestionList({suggestionList});
      props.setCategoryList({categoryList});
    };
    fetchData();
  }, []);
  return (
    <Home>
      <Header />
      {/* <Text>Buscador</Text> */}
      <Movie />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

// const
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    setCategoryList: () => dispatch({type: 'SET_CATEGORY_LIST'}),
    setSuggestionList: () => dispatch({type: 'SET_SUGGESTION_LIST'}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AppLayout);
