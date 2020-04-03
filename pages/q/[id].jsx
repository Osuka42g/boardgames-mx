import Layout from '../../components/Layout';
import getItems from '../../queries';

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
  const items = await getItems(id) || [];

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
