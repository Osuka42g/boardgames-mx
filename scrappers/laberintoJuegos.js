import cheerio from 'cheerio';
import fetch from 'isomorphic-unfetch';
import logger from '../utils/logger';

const log = logger('Fetch Laberinto de Juegos');

const vendor = 'Laberinto de Juegos';

const parseItem = item => ({
  title: item.title,
  image: item.image,
  shopURL: item.shopURL,
  price: Number(item.price.replace(/[^0-9.-]+/g, "")),
  vendor,
});

const laberintoJuegos = async query => {
  try {
    const productsSelector = '.product';

    const res = await fetch(`https://laberintojuegos.com/?s=${query}&post_type=product`);
    const result = await res.text();
    const $ = cheerio.load(result);

    const items = [];

    $(productsSelector).each((index, el) => {
      const shopURL = $(el).find('a').attr("href");
      const image = $(el).find('img').attr("src")
      const title = $(el).find('h2.woocommerce-loop-product__title').text();
      const price = $(el).find('.woocommerce-Price-amount.amount').text().trim();

      const item = parseItem({
        shopURL,
        image,
        title,
        price,
      });

      items.push(item);
    });

    return items;
  } catch (err) {
    log(err);
    return [];
  }
};

export default laberintoJuegos;
