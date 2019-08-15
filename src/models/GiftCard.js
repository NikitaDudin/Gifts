import PropTypes from 'prop-types';

export default PropTypes.shape({
  codesCount: PropTypes.number.isRequired,
  credits: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  redeemUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});
