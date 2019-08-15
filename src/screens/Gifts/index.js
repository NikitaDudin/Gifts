import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { gifts as actions } from '@/store/actions';
import Container from '@/components/Container';
import Categories from '@/components/Categories';

function Gifts() {
  const data = useSelector(({ gifts }) => gifts.providers);
  const refreshing = useSelector(({ gifts }) => gifts.refreshing);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    dispatch(actions.fetchGifts());
  }, []);

  useEffect(() => {
    dispatch(actions.fetchGifts());
  }, []);

  return (
    <Container provider="main">
      {!data ? (
        <ActivityIndicator size="large" />
      ) : (
        <Categories
          data={data}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </Container>
  );
}

Gifts.navigationOptions = {
  header: null,
};

export default Gifts;
