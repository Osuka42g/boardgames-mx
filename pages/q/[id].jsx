import React from 'react';
import { Card as C } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import getItems from '../../queries';

const SearchResults = ({ searchTerm, items }) => {

  const body = items.length ?
    <C.Group>
      {
        items.map(
          ({ title, price, vendor, image, shopURL }, index) => (
            <Card
              key={index}
              imageSrc={image}
              price={price}
              shopURL={shopURL}
              title={title}
              vendor={vendor}
            />
          )
        )
      }
    </C.Group> :
    <p>Sin resultados :(</p>;

  return (
    <Layout searchTerm={searchTerm}>
      {body}
    </Layout>
  );
};

SearchResults.getInitialProps = async context => {
  const { id } = context.query;
  const items = await getItems(id) || [];

  return { items, searchTerm: id, };
};

export default SearchResults;
