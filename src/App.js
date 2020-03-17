import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Player from './components/videos/Player/Player';

import Home from './containers/Home';
import Header from './components/sections/Header';

import SuggestionList from './components/videos/Suggestion/SuggestionList';
import CategoryList from './components/videos/Category/CategoryList';

import API from './utils/api';

import Button from './components/player/Buttons/index';

const App = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const movies = await API.getSuggestion(2);
      const categories = await API.getMovies();
      // console.log('categories', categories);
      setSuggestionList(movies);
      setCategoryList(categories);
    }
    fetchData();
  }, []);
  return (
    <>
      <Home>
        <Header />
        <Text>
          Buscador
          <Button />
        </Text>
        <Player />
        <CategoryList list={categoryList} />
        <SuggestionList list={suggestionList} />
      </Home>
    </>
  );
};

export default App;
