import appConfig from '@root@/app.json';
import { PURGE, REHYDRATE, SET_APP_VERSION_AND_BUILD } from '@/store/actionsList';

const { expo: { extra: { build }, version } } = appConfig;
const INITIAL_STATE = {
  version,
  build,
};

function settings(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case REHYDRATE:
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case SET_APP_VERSION_AND_BUILD: {
      return {
        ...state,
        version: payload.version,
        build: payload.build,
      };
    }
    default: return state;
  }
}

export default settings;
