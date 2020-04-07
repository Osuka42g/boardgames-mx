import { Card, Image } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import getItems from '../../queries';

const Query = ({ searchTerm, items }) => (
  <Layout searchTerm={searchTerm}>
    <Card.Group>
      {
        items.map(
          ({ title, price, vendor, image, shopURL }, index) => (
            <Card key={index}>
              <Image src={image} size={"small"} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                  {price}
                </Card.Description>
                <Card.Content extra>
                  {vendor}
                </Card.Content>
              </Card.Content>
            </Card>
          )
        )
      }
    </Card.Group>
  </Layout>
);

Query.getInitialProps = async context => {
  const { id } = context.query;
  const items = await getItems(id) || [];

  return { items, searchTerm: id, };
};

export default Query;
