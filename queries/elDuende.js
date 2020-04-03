import fetch from 'isomorphic-unfetch';
import cheerio from 'cheerio';

const elDuende = async query => {
  const res = await fetch(`https://www.elduende.com.mx/?s=${query}&post_type=product&type_aws=true`);
  const content = await res.text();

  const $ = cheerio.load(content);
  const result = $('.woocommerce-loop-product__title').data();
  console.log("result:", result);
  // return content.items.map(e => ({ ...e, vendor: 'El Duende' }));
  return result;
};

export default elDuende;


// Query.getInitialProps = async (context) => {
//   const { id } = context.query;
//   const res = await fetch(`https://www.elduende.com.mx/?s=coup&post_type=product&type_aws=true`);
//   const content = await res.text();
//   console.log('content', content);

//   const $ = cheerio.load(content);
//   const result = $('span').text();

//   console.log('result', result);

//   return { content: result };
// };