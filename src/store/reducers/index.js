import { combineReducers } from 'redux';

import gifts from '@/store/reducers/gifts';
import settings from '@/store/reducers/settings';

export default combineReducers({
  gifts,
  settings,
});
