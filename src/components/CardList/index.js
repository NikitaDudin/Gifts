import React from 'react';
import PropTypes from 'prop-types';

import CategoriesModel from '@/models/Categories';

import {
  CardSeparator,
  FlatList,
  Title,
  Wrapper,
} from '@/components/CardList/styles';
import CardListItem from '@/components/CardList/CardListItem';

function getRenderKey({ id }) {
  return `card-${id}`;
}

function CardList({ item: { title, giftCards } }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FlatList
        horizontal
        data={giftCards}
        renderItem={CardListItem}
        keyExtractor={getRenderKey}
        ItemSeparatorComponent={CardSeparator}
      />
    </Wrapper>
  );
}

CardList.propTypes = {
  item: CategoriesModel.isRequired,
  title: PropTypes.string,
};

CardList.defaultProps = {
  title: null,
};

export default CardList;
