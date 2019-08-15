import { call, put, takeLatest } from 'redux-saga/effects';

import api from '@/api';
import {
  FETCH_GIFTS_PENDING,
  FETCH_GIFTS_FAILED,
  FETCH_GIFTS_SUCCESS,
} from '@/store//actionsList';

function* fetchProviders() {
  try {
    const { providers } = yield call(api.fetchProviders);
    const payload = providers.map(({ giftCards, title, ...obj }) => ({
      ...obj,
      title,
      giftCards: giftCards.map((gift) => ({ ...gift, provider: title })),
    }));
    yield put({ type: FETCH_GIFTS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: FETCH_GIFTS_FAILED });
  }
}

export default function* watcher() {
  yield takeLatest(FETCH_GIFTS_PENDING, fetchProviders);
}
