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

export default Query;
