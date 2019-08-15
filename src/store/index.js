import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appConfig from '@root@/app.json';
import rootReducer from '@/store/reducers';
import saga from '@/store/saga';

const { expo: { extra: { build }, version } } = appConfig;
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default (() => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store, null, () => {
    const { version: v, build: b } = store.getState().settings;
    if (version !== v || build !== b) persistor.purge();
  });
  return { store, persistor };
})();

sagaMiddleware.run(saga);
