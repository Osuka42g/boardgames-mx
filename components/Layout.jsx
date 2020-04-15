import Head from 'next/head';
import Header from './Header';
import SearchForm from '../components/SearchForm';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const defaultMetas = {
  title: 'Mesa de Juegos',
  description: 'Buscador de juegos de mesa en tiendas mexicanas.',
};

const Layout = props => {
  const { metas, searchTerm, children } = props;

  const submitted = term => {
    if (term) {
      document.location.href = `/q/${term}`;
    }
  };

  const title = metas && metas.title ? `${metas.title} - ${defaultMetas.title}` : defaultMetas.title;
  const description = metas && metas.description ? metas.description : defaultMetas.description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <div style={layoutStyle}>
        <Header />
        <SearchForm
          onSubmit={submitted}
          initialSearchTerm={searchTerm}
        />
        {children}
      </div>
    </>
  )
};

export default Layout;
