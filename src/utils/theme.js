function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getColorFromTheme(fieldName) {
  if (!fieldName) throw new Error('The theme color name must be specified');
  if (typeof fieldName !== 'string') throw new Error('The theme color name must be of string type');

  return ({ theme }) => {
    try {
      const color = fieldName.split('.').reduce((acc, item) => (acc[item]), theme.colors);
      if (!color) throw new Error('Color value is empty');
      return color;
    } catch (error) {
      console.warn(
        'You try to get unspecified field from the Theme object in the "getColorFromTheme" function:',
        error,
      );
      return getRandomColor();
    }
  };
}

function getColorByKey(key, colors) {
  let color = colors.default;
  Object.entries(colors).some(([availableKey, colorValue]) => {
    const reg = new RegExp(availableKey, 'ig');
    const isMatched = reg.test(key);
    if (isMatched) color = colorValue;
    return isMatched;
  });
  return color;
}


function getColorByProvider({ provider, theme: { colors: { providers } } }) {
  return getColorByKey(provider, providers);
}

function getGradientByProvider({ provider, theme: { colors: { gradient } } }) {
  const colors = getColorByKey(provider, gradient);
  if (typeof colors === 'string') return [colors];
  return colors;
}

function getSafeAreaColorByProvider({ provider, theme: { colors: { gradient } } }) {
  const color = getColorByKey(provider, gradient)[0];
  return color || getRandomColor();
}

export {
  getColorByProvider,
  getColorFromTheme,
  getGradientByProvider,
  getRandomColor,
  getSafeAreaColorByProvider,
};
