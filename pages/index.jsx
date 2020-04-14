import { Flag, Container, Header, Image as SemanticImage, } from 'semantic-ui-react'
import Layout from '../components/Layout';

const Image = ({ href, logoSrc, }) => <SemanticImage
  src={`logos/${logoSrc}`}
  size='small'
  as='a'
  href={href}
  target='_blank'
  wrapped
/>

export default function Index() {

  return (
    <Layout title="Mesa de Juegos">
      <Container fluid>
        <Header as='h1'>Buscador de Juegos de Mesa México</Header>
        <p>Usa el buscador de arriba para encontrar cualquier juego. Sólo tiendas nacionales.</p>
        <Header as='h3'>En qué tiendas busca?</Header>
        <Image
          logoSrc='ElDuende.png'
          href='https://www.elduende.com.mx'
        />
        <Image
          logoSrc='ElReino.png'
          href='https://www.elreino.mx'
        />
        <Image
          logoSrc='JuegaMas.png'
          href='http://juegamas.mx'
        />
        <Image
          logoSrc='KawaGames.jpg'
          href='https://kawagames.com.mx'
        />
        <Image
          logoSrc='NaluaJuegos.jpg'
          href='https://naluajuegos.com'
        />
        <br />
        <a href="mailto:mxboardgames@gmail.com">
          <p>Administras una tienda? <Flag name='mx' /></p>
        </a>
      </Container>
    </Layout>
  );
}