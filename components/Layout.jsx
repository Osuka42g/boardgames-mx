import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const submitted = e => {
    e.preventDefault();
    console.log('searchTerm',searchTerm);
    document.location.href = `/q/${searchTerm}`
  }

  return (
    <div style={layoutStyle}>
      <Header />
      <Form onSubmit={submitted}>
        <Form.Field>
          <label>Búsqueda</label>
          <input placeholder='' name="searchTerm" className="search-term" onChange={e => setSearchTerm(e.target.value)} />
          <Button type="submit" />
        </Form.Field>
      </Form>
      {props.children}
    </div>
  )
};

export default Layout;