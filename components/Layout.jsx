import { useState } from 'react';
import { Button, Form, } from 'semantic-ui-react';

import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm || '');

  const submitted = e => {
    e.preventDefault();
    document.location.href = `/q/${searchTerm}`
  }

  return (
    <div style={layoutStyle}>
      <Header />
      <Form onSubmit={submitted}>
        <Form.Field>
          <label>Búsqueda</label>
          <input placeholder='' name="searchTerm" className="search-term" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
          <Button type="submit">Go!</Button>
        </Form.Field>
      </Form>
      {props.children}
    </div>
  )
};

export default Layout;