import styled from 'styled-components';

import { getColorFromTheme } from '@/utils';

const Button = styled.TouchableOpacity`
  background-color: ${getColorFromTheme('card.background')};
  border-radius: 20px;
  padding: 16px;
  margin: 20px;
`;
const ButtonText = styled.Text`
  color: ${getColorFromTheme('main.text')}
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export {
  Button,
  ButtonText,
};
