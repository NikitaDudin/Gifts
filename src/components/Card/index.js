import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Layout from '@/constants/Layout';
import GiftCardModel from '@/models/GiftCard';
import {
  CardWrapper,
  Row,
  Coins,
  Credits,
  Logo,
  Price,
} from '@/components/Card/styles';
import {
  getCurrencySymbol,
  getPrice,
  numberWithSplitter,
} from '@/utils';

const { window: { width: WINDOW_WIDTH } } = Layout;

function Card({
  onPress,
  item: {
    credits,
    imageUrl,
    provider,
    title,
    currency,
  },
  width,
  activeOpacity,
}) {
  return (
    <CardWrapper onPress={onPress} width={width} activeOpacity={activeOpacity}>
      <Row>
        <Logo source={{ uri: imageUrl }} resizeMode="cover" />
        <Price width={width}>{`${getCurrencySymbol(currency)}${getPrice(title)}`}</Price>
      </Row>
      <Credits width={width} provider={provider}>
        {numberWithSplitter(credits)}
        <Coins width={width}> coins</Coins>
      </Credits>
    </CardWrapper>
  );
}

Card.propTypes = {
  activeOpacity: PropTypes.number,
  item: GiftCardModel.isRequired,
  onPress: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
  activeOpacity: 0.2,
  onPress: null,
  width: WINDOW_WIDTH * 0.4,
};

export default memo(Card);
