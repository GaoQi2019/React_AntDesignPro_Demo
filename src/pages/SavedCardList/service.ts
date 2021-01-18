import { request } from 'umi';
import { CardItem } from './data.d';

export async function queryCardList(params?: CardItem) {
  return request('/api/cards', {
    params,
  });
}
