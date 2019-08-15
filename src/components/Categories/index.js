import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import CategoriesModel from '@/models/Categories';
import CardList from '@/components/CardList';

function getKey({ id }) {
  return `category-${id}`;
}

function Categories({ data, refreshing, onRefresh }) {
  return (
    <FlatList
      data={data}
      renderItem={CardList}
      keyExtractor={getKey}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
}

Categories.propTypes = {
  data: CategoriesModel.isRequired,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

Categories.defaultProps = {
  onRefresh: null,
  refreshing: null,
};

export default Categories;
