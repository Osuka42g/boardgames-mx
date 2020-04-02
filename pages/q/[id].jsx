import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import cheerio from "cheerio";

const Query = props => (
  <Layout>
    <ul>
      {
        props.items.map(
          ({ title, price, vendor }) => (
          <li>{`${title}: ${price} (${vendor})`}</li>
          )
        )
      }
    </ul>
  </Layout>
);

Query.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://www.searchanise.com/getresults?api_key=4L0X2L9C1T&q=${id}&items=true`);
  const result = await res.json();

  const items = result.items.map(e => ({ ...e, vendor: 'El Reino' }));

  return { items };
};

// Query.getInitialProps = async (context) => {
//   const { id } = context.query;
//   const res = await fetch(`https://www.elreino.mx/pages/search-results-page?q=${id}`);
//   const content = await res.text();
//   console.log('content', content);

//   const $ = cheerio.load(content);
//   const result = $('span').text();

//   console.log('result', result);

//   return { content: result };
// };

export default Query;
