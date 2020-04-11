import _ from 'lodash';

import { promiseAllTimeout } from '../utils';
import { isCached, getCache, putCache, } from '../utils/cache';

import elReino from './elReino';
import elDuende from './elDuende';
import naluaJuegos from './naluaJuegos';
import kawaGames from './kawaGames';

import { byPrice, relation } from '../utils';

const tiemout = 8 * 1000; // 8 secs

const getItems = async item => {

  if(isCached(item)) {
    return getCache(item);
  };

  const stores = [
    elReino,
    elDuende,
    naluaJuegos,
    kawaGames,
  ];

  const storesQuery = stores.map(e => e(item));

  const items = await promiseAllTimeout(storesQuery, tiemout);

  const flattenItems = _.flatten(items);
  const relationItems = flattenItems.map(e => ({ ...e, relation: relation(item, e.title) }));
  const totallyRelatedItems = relationItems.filter(e => e.relation >= 0.1);
  const notRelatedItems = relationItems.filter(e => e.relation < 0.1);

  const finallyItems = [...totallyRelatedItems.sort(byPrice), ...notRelatedItems.sort(byPrice)];

  putCache(item, finallyItems);

  return finallyItems;
};

export default getItems;