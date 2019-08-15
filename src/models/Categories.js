import PropTypes from 'prop-types';

import GiftCardModel from '@/models/GiftCard';

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  giftCards: PropTypes.arrayOf(GiftCardModel).isRequired,
}));
