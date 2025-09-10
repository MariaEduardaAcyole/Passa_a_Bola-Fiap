// src/pages/_app.js
import '../../globals.css'; // importa o CSS global
import '../css/login.css'; // importa o CSS do login (global ou module)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
