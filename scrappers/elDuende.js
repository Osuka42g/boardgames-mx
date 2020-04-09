import fetch from 'isomorphic-unfetch';

const vendor = 'El Duende';

const stripHtml = q => q.replace(/<\/?[^>]+(>|$)/g, "");

const parseItem = item => ({
  title: stripHtml(item.title),
  image: item.image,
  shopURL: item.link,
  price: parseFloat(item.f_price),
  vendor,
});

const elDuende = async query => {
  const res = await fetch('https://www.elduende.com.mx/?wc-ajax=aws_action', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `keyword=${query}&typedata=json`
  });
  const result = await res.json();

  const items = result.products.map(parseItem);

  return items;
};

export default elDuende;
