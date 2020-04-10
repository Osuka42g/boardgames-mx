import _ from 'lodash';

import elReino from './elReino';
import elDuende from './elDuende';
import naluaJuegos from './naluaJuegos';

import { byPrice } from '../utils'

const getItems = async item => {

  const stores = [
    elReino,
    elDuende,
    naluaJuegos,
  ];

  const storesQuery = stores.map(e => e(item));

  const items = await Promise.all(storesQuery);

  const flattenItems = _.flatten(items);
  const sortedItems = flattenItems.sort(byPrice);
  return sortedItems;
};

export default getItems;