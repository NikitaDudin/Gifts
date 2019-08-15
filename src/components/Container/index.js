import React from 'react';
import PropTypes from 'prop-types';

import SafeArea from '@/components/SafeArea';
import LinearGradient from '@/components/LinearGradient';
import View from '@/components/Container/styles';

function Container({ provider, ...props }) {
  return (
    <SafeArea provider={provider}>
      <LinearGradient provider={provider} />
      <View {...props} />
    </SafeArea>
  );
}

Container.propTypes = {
  provider: PropTypes.string,
};

Container.defaultProps = {
  provider: 'main',
};

export default Container;
