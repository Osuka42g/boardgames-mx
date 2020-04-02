import { useState } from 'react';
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
      <h3>Búsqueda</h3>
      <form onSubmit={submitted}>
        <input name="searchTerm" className="search-term" onChange={e => setSearchTerm(e.target.value)} />
        <button type="submit" />
      </form>
      {props.children}
    </div>
  )
};

export default Layout;