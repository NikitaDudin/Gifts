import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import Button from '@/components/Button';
import Container from '@/components/Container';
import GiftCard from '@/components/Card';
import Layout from '@/constants/Layout';
import {
  Card,
  Description,
  ScrollView,
} from '@/screens/GiftDetail/styles';

const { window: { width: WINDOW_WIDTH } } = Layout;

function CardDetail({ navigation: { getParam, goBack } }) {
  const giftCard = getParam('giftCard');
  return (
    <Container provider={giftCard.provider}>
      <ScrollView>
        <Transition shared={`${giftCard.provider}giftcard-${giftCard.id}`} appear="scale">
          <GiftCard
            activeOpacity={1}
            width={WINDOW_WIDTH}
            item={giftCard}
          />
        </Transition>
        <Card>
          <Description>{giftCard.description}</Description>
        </Card>
        <Button onPress={() => goBack()} title="Back" />
      </ScrollView>
    </Container>
  );
}

CardDetail.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default CardDetail;
