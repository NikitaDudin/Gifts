import { LinearGradient as Gradient } from 'expo-linear-gradient';
import styled from 'styled-components';

import { getGradientByProvider } from '@/utils';

const LinearGradient = styled(Gradient).attrs((props) => ({
  colors: props.colors || getGradientByProvider(props),
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default LinearGradient;
