import { Flag, Container, Header, Image as SemanticImage, } from 'semantic-ui-react'
import Layout from '../components/Layout';

const Image = ({ href, logoSrc, alt, }) => <SemanticImage
  src={`logos/${logoSrc}`}
  size='small'
  as='a'
  href={href}
  target='_blank'
  style={{
    margin: '1.5rem',
  }}
  alt={alt}
  wrapped
/>

export default function Index() {

  return (
    <Layout title="Mesa de Juegos">
      <Container fluid>
        <Header as='h1'>Buscador de Juegos de Mesa México</Header>
        <p>Usa el buscador de arriba para encontrar cualquier juego. Sólo tiendas nacionales.</p>
        <Header as='h3'>El buscador corre en las siguiente tiendas:</Header>
        <Image
          logoSrc='ElDuende.png'
          alt='El Duende'
          href='https://www.elduende.com.mx'
        />
        <Image
          logoSrc='ElReino.png'
          alt='El Reino'
          href='https://www.elreino.mx'
        />
        <Image
          logoSrc='GeekyStuff.png'
          alt='Geeky Stuff'
          href='https://geekystuff.mx'
        />
        <Image
          logoSrc='JuegaMas.png'
          alt='Juega+ Jugueterías'
          href='http://juegamas.mx'
        />
        <Image
          logoSrc='KawaGames.jpg'
          alt='KawaGames'
          href='https://kawagames.com.mx'
        />
        <Image
          logoSrc='NaluaJuegos.jpg'
          alt='Nalua Juegos'
          href='https://naluajuegos.com'
        />
        <Image
          logoSrc='NidoGeek.png'
          alt='Nido Geek'
          href='https://nidogeek.com'
        />
        <br />
        <a href="mailto:mxboardgames@gmail.com">
          <p>Administras una tienda? <Flag name='mx' /></p>
        </a>
      </Container>
    </Layout>
  );
}