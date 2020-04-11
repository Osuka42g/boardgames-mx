import cheerio from 'cheerio';
import fetch from 'isomorphic-unfetch';

const vendor = 'KawaGames';

const parseItem = item => ({
  title: item.title,
  image: item.image,
  shopURL: item.shopURL,
  price: Number(item.price.replace(/[^0-9.-]+/g, "")),
  vendor,
});

const capital = cap => cap.charAt(0).toUpperCase() + cap.slice(1);

const productsSelector = '.product-type-simple';

const useRobustSearch = async query => {
  const res = await fetch(`https://kawagames.com.mx/?s=${query}&post_type=product&dgwt_wcas=1`);
  const result = await res.text();
  const $ = cheerio.load(result);

  const items = [];

  $(productsSelector).each((_, el) => {
    const shopURL = $(el).find('.woocommerce-loop-product__link').attr("href");
    const image = $(el).find('img').attr("data-src");
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
};

const useSingleProduct = async (itemName, productURL) => {
  const product = await fetch(productURL);
  const result = await product.text();
  const $ = cheerio.load(result);

  const el = $(productsSelector);
  const image = $(el).find('img').attr("data-src");
  const price = $(el).find('p.price > span').text();

  return parseItem({
    title: capital(itemName),
    shopURL: productURL,
    image,
    price,
  });
};

const kawaGames = async query => {

  const isThereAnyGame = await fetch(`https://kawagames.com.mx/?wc-ajax=dgwt_wcas_ajax_search&s=${query}`);
  const isThere = await isThereAnyGame.json();

  if (isThere.total === 0) return [];
  if (isThere.total === 1) {
    const urlFetch = isThere.suggestions[0].url;
    const item = await useSingleProduct(query, urlFetch);
    return [item];
  };

  const items = await useRobustSearch(query);
  return items;
};

export default kawaGames;
