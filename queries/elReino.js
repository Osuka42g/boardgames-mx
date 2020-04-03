import fetch from 'isomorphic-unfetch';

const elReino = async query => {
  const res = await fetch(`https://www.searchanise.com/getresults?api_key=4L0X2L9C1T&q=${query}&items=true`);
  const result = await res.json();

  return result.items.map(e => ({ ...e, vendor: 'El Reino' }));
};

export default elReino;
