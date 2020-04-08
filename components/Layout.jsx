import Header from './Header';
import SearchForm from '../components/SearchForm';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => {
  const submitted = term => {
    if (term) {
      document.location.href = `/q/${term}`;
    }
  }

  return (
    <div style={layoutStyle}>
      <Header />
      <SearchForm
        onSubmit={submitted}
        initialSearchTerm={props.searchTerm}
      />
      {props.children}
    </div>
  )
};

export default Layout;
