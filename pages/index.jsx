import useSWR from 'swr';
import Layout from '../components/Layout';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {

  return (
    <Layout>

    </Layout>
  );
}