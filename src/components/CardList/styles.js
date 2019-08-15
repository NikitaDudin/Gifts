import { StyleSheet } from 'react-native';
import styled from 'styled-components';

import { getColorFromTheme } from '@/utils';

const styles = StyleSheet.create({
  flatlistCCS: {
    paddingHorizontal: 20,
  },
});

const CardSeparator = styled.View`
  background-color: ${getColorFromTheme('transparent')};
  width: 20px;
  height: 100%;
`;

const FlatList = styled.FlatList.attrs({
  contentContainerStyle: styles.flatlistCCS,
})`
  background-color: ${getColorFromTheme('transparent')};
`;

const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: ${getColorFromTheme('main.text')};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-horizontal: 20px;
`;

const Wrapper = styled.View`
  margin: 20px 0;
`;


export {
  CardSeparator,
  FlatList,
  Title,
  Wrapper,
};
