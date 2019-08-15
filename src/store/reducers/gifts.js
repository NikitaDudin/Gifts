import {
  PURGE,
  REHYDRATE,
  FETCH_GIFTS_FAILED,
  FETCH_GIFTS_PENDING,
  FETCH_GIFTS_SUCCESS,
} from '@/store/actionsList';

const INITIAL_STATE = {
  providers: null,
  refreshing: false,
  error: false,
};

function gifts(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case REHYDRATE:
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case FETCH_GIFTS_PENDING: {
      return {
        ...state,
        refreshing: true,
        error: false,
      };
    }
    case FETCH_GIFTS_SUCCESS: {
      return {
        ...state,
        providers: payload,
        refreshing: false,
      };
    }
    case FETCH_GIFTS_FAILED: {
      return {
        ...state,
        refreshing: false,
        error: true,
      };
    }
    default: return state;
  }
}

export default gifts;
