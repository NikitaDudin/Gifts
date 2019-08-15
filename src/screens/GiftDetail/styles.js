import styled from 'styled-components';

import { getColorFromTheme } from '@/utils';

const Button = styled.TouchableOpacity`
  background-color: ${getColorFromTheme('card.background')};
  border-radius: 20px;
  padding: 16px;
  margin: 20px;
`;
const Card = styled.View`
  background-color: ${getColorFromTheme('card.background')};
  border-radius: 20px;
  padding: 16px;
  margin: 20px;
`;
const Description = styled.Text`
  font-size: 16px;
  color: ${getColorFromTheme('card.description')};
`;
const ScrollView = styled.ScrollView`
  flex: 1;
`;

export {
  Button,
  Card,
  Description,
  ScrollView,
};
