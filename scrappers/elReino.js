import fetch from 'isomorphic-unfetch';

const vendor = 'El Reino';

const parseItem = item => ({
  title: item.title,
  image: item.image_link,
  shopURL: item.link,
  price: parseFloat(item.price),
  vendor,
});

const elReino = async query => {
  const res = await fetch(`https://www.searchanise.com/getresults?api_key=4L0X2L9C1T&q=${query}`);
  const result = await res.json();

  return result.items.map(parseItem);
};

export default elReino;
