// src/pages/_app.js
//telas

import '../Styles/global.css';
import '../../globals.css';
import '../css/login.css'; // importa o CSS do login (global ou module)
import '../css/home.css';
import '../css/perfil.css'
import '../css/lista-jogos.css'
import '../css/listaCampeonato.css'
import '../css/feed.css'

//components
import '../css/header.css'; // importa o CSS do home (global ou module)
import '../css/menuInferior.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
