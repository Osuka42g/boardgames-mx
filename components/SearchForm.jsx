import { useState } from 'react';
import { Form, Input, } from 'semantic-ui-react';

const styles = {
  input: {
    marginBottom: '1.5rem'
  }
};

const SearchForm = ({ onSubmit, initialSearchTerm = ""}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [isLoading, setLoading] = useState(false);

  const onFormSubmitted = () => {
    onSubmit(searchTerm);
    setLoading(true);
  };

  return (
    <Form onSubmit={onFormSubmitted}>
      <Input
        name="searchTerm"
        className="search-term"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        tabIndex={0}
        loading={isLoading}
        iconPosition={isLoading ? 'left' : null}
        style={styles.input}
        fluid
        action={{
          color: 'teal',
          content: 'Go!',
        }}
      />
    </Form >
  )
};

export default SearchForm;
