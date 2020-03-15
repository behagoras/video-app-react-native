import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Layout from './SuggestionListLayout';
import Empty from '../sections/Empty';
import Separator from '../sections/VerticalSeparator';

const list = [
  {
    title: 'Avenger',
    key: '1',
  },
  {
    title: 'Pokemon',
    key: '2',
  },
];

const SuggestionList = () => {
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => <Text>{item.title}</Text>;

  return (
    <Layout title="Recomendado para tí">
      <FlatList
        data={list}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </Layout>
  );
};

export default SuggestionList;
