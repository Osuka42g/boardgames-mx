import fetch from 'isomorphic-unfetch';
import logger from '../utils/logger';

const log = logger('Fetch Geeky Stuff');

const vendor = 'Geeky Stuff';

const parseItem = item => ({
  title: item.label,
  image: item.thumb,
  shopURL: item.value,
  price: Number(item.price.replace(/[^0-9]/g, '')) / 100,
  vendor,
});

const geekyStuff = async query => {
  try {
    const res = await fetch(`https://wix-instantsearchplus-ssl.akamaized.net/?s=https%3A%2F%2Fwww.geekystuff.mx%2F&instance=b72e6963-f5ca-4e15-92d2-460b040fc348&q=${query}`);
    const result = await res.json();

    return result.map(parseItem);
  } catch (err) {
    log(err);
    return [];
  }
};

export default geekyStuff;
