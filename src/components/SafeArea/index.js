import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';

import { getSafeAreaColorByProvider } from '@/utils';

const TOP_PADING = Platform.select({
  ios: 0,
  android: StatusBar.currentHeight,
});

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${getSafeAreaColorByProvider};
  padding-top: ${TOP_PADING};
`;

export default SafeArea;
