import cheerio from 'cheerio';
import fetch from 'isomorphic-unfetch';
import logger from '../utils/logger';

const log = logger('Fetch NidoGeek');

const vendor = 'Nido Geek';

const parseItem = (item = {}) => ({
  title: item.title,
  image: item.image,
  shopURL: item.shopURL,
  price: Number(item.price.replace(/[^0-9.-]+/g, "")) / 100,
  vendor,
});

const nidoGeek = async query => {
  try {
    const productsSelector = '.products.catalog-products.row > article';

    const res = await fetch(`https://nidogeek.com/busqueda?controller=search&s=${query}`);
    const result = await res.text();
    const $ = cheerio.load(result);

    const items = [];

    $(productsSelector).each((_, el) => {
      const shopURL = $(el).find('h3.product-title > a').attr("href");
      const image = $(el).find('img.thumbnail-img').attr("src");
      const title = $(el).find('h3.product-title > a').text();
      const price = $(el).find('span.price').text().trim();

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

export default nidoGeek;
