import axios from 'axios';

import { changeCase } from '@/utils';

async function fetchProviders() {
  const { data } = await axios.get('http://mobile-hr.de02.agima.ru/exam/providers.json');
  return changeCase(data);
}

export default {
  fetchProviders,
};
