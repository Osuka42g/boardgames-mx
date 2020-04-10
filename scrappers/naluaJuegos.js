import cheerio from 'cheerio';
import fetch from 'isomorphic-unfetch';

const vendor = 'Nalua Juegos';

const parseItem = item => ({
  title: item.title,
  image: item.image,
  shopURL: item.shopURL,
  price: Number(item.price.replace(/[^0-9.-]+/g, "")),
  vendor,
});

const elReino = async query => {
  const productsSelector = '.ajax_block_product > article';

  const res = await fetch(`https://naluajuegos.com/index.php?fc=module&module=leoproductsearch&controller=productsearch&cate=&search_query=${query}`);
  const result = await res.text();
  const $ = cheerio.load(result);

  const items = [];

  $(productsSelector).each((_, el) => {
    const shopURL = $(el).find('.thumbnail.product-thumbnail').attr("href");
    const image = $(el).find('img.img-fluid').attr("src");
    const title = $(el).find('.product-title').text();
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
};

export default elReino;
