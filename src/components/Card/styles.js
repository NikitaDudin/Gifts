import { Image } from 'react-native';
import styled from 'styled-components';

import { getColorFromTheme, getColorByProvider } from '@/utils';

const COEFFICIENT = 0.35 * 0.5; // bottom line contain 35%, height equal half of width


function getCreditsHeight({ width }) {
  return (COEFFICIENT * 0.8 * width);
}
function getCreditsSize({ width }) {
  return (COEFFICIENT * 0.6 * width);
}
function getCoinsSize({ width }) {
  return (COEFFICIENT * 0.35 * width);
}
function getPriceFontSize({ width }) {
  return (0.5 * 0.65 * 0.3 * width);
}


const CardWrapper = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${getColorFromTheme('card.background')};
  width: ${(props) => props.width};
  aspectRatio: 2;
  flex-direction: column;
  overflow: hidden;
`;
const Coins = styled.Text`
  color: ${getColorFromTheme('card.coins')};
  font-size: ${getCoinsSize}px;
  font-weight: 500;
  text-align-vertical: center;
`;
const Credits = styled.Text`
  flex: 35;
  color: ${getColorFromTheme('card.credits')};;
  background-color: ${getColorByProvider};
  line-height: ${getCreditsHeight}px;
  font-size: ${getCreditsSize}px;
  font-weight: 600;
  text-align: center;
  text-align-vertical: center;
`;
const Logo = styled(Image)`
  width: 45%;
  aspectRatio: 2;
`;
const Price = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  width: 45%;
  font-size: ${getPriceFontSize};
  font-weight: bold;
  color: ${getColorFromTheme('main.text')};
  text-align: center;
`;
const Row = styled.View`
  flex: 65;
  background-color: ${getColorFromTheme('transparent')};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 8px;
`;

export {
  CardWrapper,
  Coins,
  Credits,
  Logo,
  Price,
  Row,
};
