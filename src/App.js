import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Utils
import API from './utils/api';
import {store, persistor} from './store';

//Components
import Player from './components/player/Player';
import Home from './containers/Home';
import Header from './components/sections/Header';
import SuggestionList from './components/videos/Suggestion/SuggestionList';
import CategoryList from './components/videos/Category/CategoryList';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const suggestionList = await API.getSuggestion(2);
      const categoryList = await API.getMovies();
      store.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          suggestionList,
        },
      });
      store.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          categoryList,
        },
      });
    };
    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home>
          <Header />
          <Text>Buscador</Text>
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </PersistGate>
    </Provider>
  );
};

export default App;
