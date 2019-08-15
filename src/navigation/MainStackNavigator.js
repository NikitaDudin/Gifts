import { Animated, Easing } from 'react-native';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Gifts from '@/screens/Gifts';
import GiftDetail from '@/screens/GiftDetail';

const transitionConfig = {
  duration: 250,
  timing: Animated.timing,
  easing: Easing.easing,
};

const config = {
  defaultNavigationOptions: { gesturesEnabled: true },
  transitionConfig,
  headerMode: 'none',
};

const GiftsStack = FluidNavigator(
  {
    Gifts,
    GiftDetail,
  },
  config,
);

GiftsStack.path = '';

export default GiftsStack;
