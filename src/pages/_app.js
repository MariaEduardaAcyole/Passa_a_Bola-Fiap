//_app.js
import '../../globals.css'; // importa o CSS global
import '../css/login.css'; // importa o CSS do login (global ou module)
import '../css/home.css';
import '../css/perfil.css'
import '../css/lista-jogos.css'
import '../css/feed.css'
import '../css/detalhes-jogos.css'
//components
import '../css/header.css'; // importa o CSS do home (global ou module)
import '../css/menuInferior.css';
import '../css/clima.css';
import '../css/header.css'; 
import '../css/menuInferior.css';
import '../css/clima.css';
import '../css/navigation.css';
import '../css/campeonatoList.css';
import '../css/formCampeonato.css';

import '../css/formJogo.css';
import '../css/jogosList.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
