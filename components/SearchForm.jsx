import { useState } from 'react';
import { Form } from 'semantic-ui-react';

const SearchForm = ({ onSubmit, initialSearchTerm = ""}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  return (
    <Form onSubmit={() => onSubmit(searchTerm)}>
      <Form.Group inline>
        <Form.Field>
          <label>Búsqueda</label>
          <Form.Input
            name="searchTerm"
            className="search-term"
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <Form.Button content='Go!' />
        </Form.Field>
      </Form.Group>
    </Form >
  )
};

export default SearchForm;
