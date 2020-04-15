import { Card as C, Message } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import getItems from '../../scrappers';

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
    <Layout
      searchTerm={searchTerm}
      metas={{
        title: `Resultados para ${searchTerm}`,
        description: `Artículos de la búsqueda para ${searchTerm}, se encontraron ${items.length} resultados en tiendas de México.`,
      }}
    >
      {body}
      <Message floating>Nota: no se garantiza la disponibilidad y precio de cada artículo; los productos mostrados son el resultado de la búsqueda en cada sitio.</Message>
    </Layout>
  );
};

SearchResults.getInitialProps = async context => {
  const { id } = context.query;
  const items = await getItems(id) || [];

  return { items, searchTerm: id, };
};

export default SearchResults;
