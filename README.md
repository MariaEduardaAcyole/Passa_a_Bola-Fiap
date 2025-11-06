# ⚽ Esportera - Passa a Bola

Aplicação desenvolvida em **Next.js** para gerenciamento e acompanhamento de jogos de futebol feminino.  
O projeto foi construído como parte do curso de Engenharia de Software da FIAP e tem como objetivo incentivar a visibilidade do esporte no país. Como parte do desafio do Challenge do ano de 2025.

---

## 🚀 Tecnologias utilizadas

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) (para estilização)
- [Node.js](https://nodejs.org/) (ambiente de execução)
- [Python](https://www.python.org/) (Scrapper para dados)
- [Flask](https://flask.palletsprojects.com/) (API backend)

---

## 📌 Funcionalidades

- **Login** para acessar o sistema
- **Página Home** com resumo principal  
- **Lista de Jogos** mostrando partidas cadastradas com a possibilidade de participação em jogos semanais
- **Perfil do usuário** com informações pessoais
- **Feed/Comunidade** possibilita a participação em uma comunidade ativa dentro de um Feed estilo rede social
- **Lista de Campeonatos** inscrição em peneiras e campeonatos
- **Radar dos jogos da seleção** A apresentação dos resultados de jogos da seleção e próximos jogos
- **Divulgação de outros campeonatos** divulgação dos resultados de jogos de várzea
- **Lista de espera** A participação em listas de espera e o cancelamento dinâmico da participação nos jogos

---

## ⚡ Como rodar o projeto

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **Python** (versão 3.8 ou superior) - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)

---

### 🖥️ Frontend (Next.js)

#### 1. Clone este repositório
```bash
git clone https://github.com/MariaEduardaAcyole/Passa_a_Bola-Fiap/
cd Passa_a_Bola-Fiap
```

#### 2. Instale as dependências do frontend
```bash
npm install
```

#### 3. Configure as variáveis de ambiente (se necessário)
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

#### 5. O frontend estará rodando em:
```
http://localhost:3000
```

---

### 🐍 Backend (API Flask)

#### 1. Navegue até o diretório da API
```bash
cd api
```

#### 2. Instale as dependências Python
```bash
pip install -r requirements.txt
```

#### 3. Inicie o servidor Flask
```bash
python app.py
```

#### 4. A API estará rodando em:
```
http://localhost:5000
```
---

## 🛠️ Scripts disponíveis

### Frontend (Next.js)
```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm start        # Inicia o servidor de produção
npm run lint     # Executa o linter
```

### Backend (Flask)
```bash
python app.py    # Inicia o servidor Flask
```

---

## 📝 Observações importantes

- Certifique-se de ter as portas **3000** (frontend) e **5000** (backend) disponíveis
- O frontend e o backend devem estar rodando **simultaneamente** para o funcionamento completo da aplicação
- Para desenvolvimento, sempre ative o ambiente virtual Python antes de trabalhar no backend
- Mantenha as variáveis de ambiente (`.env` e `.env.local`) fora do controle de versão

---

## 👤 Autor | RM | GITHUB

* [Arthur Marcio](https://github.com/TutuMbs) - 563359
* [Gabriela Abdelnor Tavares](https://github.com/GabihAbdTavares) - 562291
* [Maria Eduarda Sousa Acyole de Oliveira](https://github.com/MariaEduardaAcyole) – 566337
* [Mayke Santos](https://github.com/Maykesantos98) - 562680
* [Matheus Goes](https://github.com/Goes1404) - 566407
---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Challenge FIAP 2025.

---

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do repositório no GitHub.

**Link do projeto:** [https://github.com/MariaEduardaAcyole/Passa_a_Bola-Fiap/](https://github.com/MariaEduardaAcyole/Passa_a_Bola-Fiap/)

---

⚽ **Feito com 💜 para incentivar o futebol feminino no Brasil!**
