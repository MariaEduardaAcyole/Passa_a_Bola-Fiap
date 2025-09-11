// src/pages/_app.js
//telas
import '../../globals.css'; // importa o CSS global
import '../css/login.css'; // importa o CSS do login (global ou module)
import '../css/home.css'; // importa o CSS do home (global ou module)

//components
import '../css/header.css'; // importa o CSS do home (global ou module)
import '../css/menuInferior.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
