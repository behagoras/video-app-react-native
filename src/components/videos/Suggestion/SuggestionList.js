import React from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import Layout from './SuggestionListLayout';
import Empty from '../../sections/Empty';
import Separator from '../../sections/VerticalSeparator';
import Suggestion from './Suggestion';

const SuggestionList = props => {
  const {list} = props;
  console.log('props in SuggestionList', props);

  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const viewMovie = selectedMovie => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        selectedMovie,
      },
    });
    // props.setSelectedMovie(movie);
    // console.log('props in Movie', props);
  };

  const renderItem = ({item}) => {
    return (
      <Suggestion
        onPress={() => {
          viewMovie(item);
        }}
        {...item}
      />
    );
  };

  const keyExtractor = item => item.id.toString();

  return (
    <Layout title="Recomendado para tí">
      <FlatList
        data={list}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        keyExtractor={keyExtractor}
      />
    </Layout>
  );
};

const mapStateToProps = state => {
  console.log('selectedMovie', state.videos.selectedMovie);
  // debugger;
  return {
    list: state.videos.categoryList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedMovie: () => dispatch({type: 'SET_SELECTED_MOVIE'}),
  };
};

export default connect(
  mapStateToProps,
  null,
)(SuggestionList);
