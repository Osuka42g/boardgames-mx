import Router from "next/router";
import withGA from "next-ga";
import 'semantic-ui-css/semantic.min.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA("UA-163337621-1", Router)(App);
