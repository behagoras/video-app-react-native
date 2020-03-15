// import styled from 'styled-components/native';
import React from 'react';
import {
  // Platform,
  Text,
} from 'react-native';
import Home from './containers/Home';
import Header from './components/sections/Header';
import SuggestionList from './components/videos/SuggestionList';

const App = () => {
  return (
    <>
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <SuggestionList />
      </Home>
    </>
  );
};

export default App;
