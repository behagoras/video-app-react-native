import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Player from './components/player/Player';

import Home from './containers/Home';
import Header from './components/sections/Header';

import SuggestionList from './components/videos/Suggestion/SuggestionList';
import CategoryList from './components/videos/Category/CategoryList';

import API from './utils/api';
import StatusBar from './components/player/StatusBar';

const App = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const movies = await API.getSuggestion(2);
      const categories = await API.getMovies();
      setSuggestionList(movies);
      setCategoryList(categories);
    };
    fetchData();
  }, []);
  return (
    <Home>
      <Header />
      <Text>Buscador</Text>
      <Player />
      {/* <StatusBar /> */}
      <CategoryList list={categoryList} />
      <SuggestionList list={suggestionList} />
    </Home>
  );
};

export default App;
