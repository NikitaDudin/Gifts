import React from 'react';
import { Transition } from 'react-navigation-fluid-transitions';

import Card from '@/components/Card';
import GiftCardModel from '@/models/GiftCard';
import { NavigationService } from '@/utils';

function ListItem({ item }) {
  function onPress() {
    NavigationService.navigate('GiftDetail', { giftCard: item });
  }

  return (
    <Transition shared={`${item.provider}giftcard-${item.id}`} appear="scale">
      <Card onPress={onPress} item={item} />
    </Transition>
  );
}

ListItem.propTypes = {
  item: GiftCardModel.isRequired,
};

export default ListItem;
