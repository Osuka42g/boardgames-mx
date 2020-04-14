import Head from 'next/head';
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

  const title = props.title || "Mesa de Juegos";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={layoutStyle}>
        <Header />
        <SearchForm
          onSubmit={submitted}
          initialSearchTerm={props.searchTerm}
        />
        {props.children}
      </div>
    </>
  )
};

export default Layout;
