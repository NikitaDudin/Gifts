import { FETCH_GIFTS_PENDING, FETCH_GIFTS_SUCCESS, FETCH_GIFTS_FAILED } from '@/store/actionsList';

export const fetchGifts = (payload) => ({ type: FETCH_GIFTS_PENDING, payload });
export const fetchGiftsSuccess = (payload) => ({ type: FETCH_GIFTS_SUCCESS, payload });
export const fetchGiftsFail = (payload) => ({ type: FETCH_GIFTS_FAILED, payload });
