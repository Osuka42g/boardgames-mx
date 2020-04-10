import { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const styles = {
  formField: {
    width: '500px',
  },
  input: {
    width: '400px',
  },
};

const SearchForm = ({ onSubmit, initialSearchTerm = ""}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  return (
    <Form onSubmit={() => onSubmit(searchTerm)}>
      <Form.Group>
        <Form.Field styles={styles.formField} inline>
          <Input
            name="searchTerm"
            className="search-term"
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            tabIndex={0}
            label={"🔎"}
            style={styles.input}
          />
          <Button content='Go!' primary />
        </Form.Field>
      </Form.Group>
    </Form >
  )
};

export default SearchForm;
