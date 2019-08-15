import React from 'react';
import PropTypes from 'prop-types';

import {
  Button as Wrapper,
  ButtonText,
} from '@/components/Button/styles';

function Button({ onPress, title }) {
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Wrapper>
  );
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onPress: null,
  title: 'Button',
};

export default Button;
