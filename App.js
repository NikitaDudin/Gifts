import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Colors from '@/constants/Colors';
import { NavigationService } from '@/utils';
import persistedStore from '@/store';
import AppNavigator from '@/navigation';

const { store, persistor } = persistedStore;

function App() {
  const ref = useRef(null);

  useEffect(() => {
    NavigationService.setTopLevelNavigator(ref);
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={{ colors: { ...Colors } }}>
          <>
            <StatusBar barStyle="dark-content" />
            <AppNavigator ref={ref} />
          </>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
