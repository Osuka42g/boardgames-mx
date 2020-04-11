import { Container, Icon, Header } from 'semantic-ui-react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Layout>
        <Container text style={{ marginTop: 42 }}>
          <p>El objetivo es tener un buscador de juegos de mesa en todas las tiendas en linea de juegos en México.</p>
          <p>Contáctame si deseas añadir tu tienda o tienes alguna sugerencia.</p>
          <p>Me encantaría leer feedback.</p>
          <p>
            <ul>
              <p><a href="mailto:mxboardgames@gmail.com"><Icon name="mail" />mxboardgames@gmail.com</a></p>
              <p><a href="https://twitter.com/Osuka42"><Icon name="twitter" />@Osuka42</a></p>
              <p><a href="https://github.com/Osuka42g"><Icon name="github" />Osuka42g</a></p>
            </ul>
            <p>Repo del proyecto en <a location="blank" href="https://github.com/Osuka42g/boardgames-mx">Github</a></p>
          </p>
        </Container>
      </Layout>
    </div>
  );
}