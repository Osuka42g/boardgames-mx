import cheerio from 'cheerio';
import fetch from 'isomorphic-unfetch';
import logger from '../utils/logger';

const log = logger('Fetch JuegaMas');

const vendor = 'Juega+';

const parseItem = item => ({
  title: item.title,
  image: item.image,
  shopURL: item.shopURL,
  price: Number(item.price.replace(/[^0-9]/g, '')) / 100,
  vendor,
});

const juegaMas = async query => {
  try {
    const productsSelector = 'li.item';

    const res = await fetch(`http://juegamas.mx/catalogsearch/result/?q=${query}`);
    const result = await res.text();
    const $ = cheerio.load(result);

    const items = [];

    $(productsSelector).each((_, el) => {
      const shopURL = $(el).find('a').attr("href");
      const image = $(el).find('img').attr("src");
      const title = $(el).find('.product-name').text().trim();
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

export default juegaMas;
