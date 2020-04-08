import fetch from 'isomorphic-unfetch';

const toFixed = q => `${parseFloat(q).toFixed(2)}`;

const parseItem = item => ({
  title: item.title,
  image: item.image_link,
  price: toFixed(item.price),
  vendor: 'El Reino',
});

const elReino = async query => {
  const res = await fetch(`https://www.searchanise.com/getresults?api_key=4L0X2L9C1T&q=${query}&items=true`);
  const result = await res.json();

  return result.items.map(parseItem);
};

export default elReino;
