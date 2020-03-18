import React from 'react';
import {connect} from 'react-redux';

import {FlatList} from 'react-native';
import Empty from '../../sections/Empty';
import Separator from '../../sections/VerticalSeparator';
import Category from './Category';
import Layout from './CategoryListLayout';

const CategoryList = ({list}) => {
  const renderEmpty = () => <Empty text="No hay categorías" />;
  const itemSeparator = () => <Separator />;

  const renderItem = ({item}) => {
    return <Category {...item} />;
  };

  const keyExtractor = item => item.id.toString();
  return (
    <Layout title="Categorías">
      <FlatList
        horizontal
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
  console.log('state', state);
  return {list: state.videos.categoryList || {}};
};

export default connect(mapStateToProps)(CategoryList);
