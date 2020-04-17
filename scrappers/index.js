import _ from 'lodash';

import { promiseAllTimeout, validateItemsObject } from '../utils';
import { isCached, getCache, putCache, } from '../utils/cache';
import logger from '../utils/logger';

import elReino from './elReino';
import elDuende from './elDuende';
import geekyStuff from './geekyStuff';
import juegaMas from './juegaMas';
import naluaJuegos from './naluaJuegos';
import nidoGeek from './nidoGeek';
import kawaGames from './kawaGames';

import { byPrice, relation } from '../utils';

const log = logger('Scrapper Index');
const tiemout = 8 * 1000; // 8secs

const getItems = async item => {

  try {
    if(isCached(item)) {
      return getCache(item);
    };

    const stores = [
      elReino,
      elDuende,
      geekyStuff,
      juegaMas,
      naluaJuegos,
      nidoGeek,
      kawaGames,
    ];

    const storesQuery = stores.map(e => e(item));

    const items = await promiseAllTimeout(storesQuery, tiemout);

    const flattenItems = _.flatten(items);
    const removeInvalidObjects = flattenItems.filter(validateItemsObject);
    const relationItems = removeInvalidObjects.map(e => ({ ...e, relation: relation(item, e.title) }));
    const totallyRelatedItems = relationItems.filter(e => e.relation >= 0.1);
    const notRelatedItems = relationItems.filter(e => e.relation < 0.1);

    const finallyItems = [...totallyRelatedItems.sort(byPrice), ...notRelatedItems.sort(byPrice)];

    putCache(item, finallyItems);

    return finallyItems;
  } catch (err) {
    log(err);
    return [];
  }
};

export default getItems;