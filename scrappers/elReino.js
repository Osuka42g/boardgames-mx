import fetch from 'isomorphic-unfetch';
import logger from '../utils/logger';

const log = logger('Fetch El Reino');

const vendor = 'El Reino';

const parseItem = item => ({
  title: item.title,
  image: item.image_link,
  shopURL: item.link,
  price: parseFloat(item.price),
  vendor,
});

const elReino = async query => {
  try {
    const res = await fetch(`https://www.searchanise.com/getresults?api_key=4L0X2L9C1T&q=${query}`);
    const result = await res.json();

    const without0Quantity = result.items.filter(e => e.quantity !== "0");

    return without0Quantity.map(parseItem);
  } catch (err) {
    log(err);
    return [];
  }
};

export default elReino;
