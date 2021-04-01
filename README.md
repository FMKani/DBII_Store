<div align="center">
    <img src="https://res.cloudinary.com/dzy81lxxj/image/upload/v1617307297/1_SZiYiNs_5c1MhHZn3EM7-A_ayzmhu.png" top="30px" width="300px"/>
</div>

<br />

<h2 align="center">
   MiniProjeto - Redis 1.0v
</h2>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/FMKani/DBII_Store?">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/FMKani/DBII_Store?">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/FMKani/DBII_Store?">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/FMKani/DBII_Store?">
</p>

<p align="center">
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-desenvolvido-com">Desenvolvido com</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-contato">Contato</a>
 </p>


## :computer: Projeto

 Miniprojeto aplicado na disciplina de Banco de dados 2. Este projeto se trata de um simples backend com um CRUD que persiste seus dados em um banco postgres e em um cache (Redis). O funcionamento é bem básico: os dados são procurados primeiramente no chache, caso não seja encontrado ocorre uma busca por eles no banco postgres

## :rocket: Desenvolvido com

Esse projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Postgres](https://www.postgresql.org/)
-   [Redis](https://redis.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [TypeORM](https://typeorm.io/#/)
-   [VS Code](https://code.visualstudio.com/)
-   [Insomnia](https://insomnia.rest/)
-   [Docker](https://www.docker.com/)

</details>


## :information_source: Como executar

### Requirements

Para rodar a aplicação será necessário:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://www.npmjs.com/package/npm)
* [Docker](https://www.docker.com/)
* [Insomnia](https://insomnia.rest/)

P.S1: É recomendável utilizar o [Docker](https://www.docker.com/) para rodar os banco de dados.
<br>

```
### Backend (API-SVG)
Primeiramente clone o repsitório e instale as dependências.
```bash
# Para clonar o repositório
$ git clone https://github.com/FMKani/DBII_Store

# Instale as dependências do backend
$ yarn

# Ou
$ npm i

# Em seguida execute
$ yarn dev

# Ou
$ npm run dev

```
P.S2: As imagens "Redis" e "Postgres devem estar rodando

P.S3: É recomendavel ainda usar o client "RedisInsight", que pode ser encontrado em: https://redislabs.com/redis-enterprise/redis-insight/

P.S4: Para conectar com o banco de dados, você precisará entrar com algumas informações de acesso que devem ser colocadas em um arquivo .env na raiz do projeto.

## Arquivo .env:

REDIS_HOST =
<br>
REDIS_PORT =
<br>
REDIS_PASS =

## :mailbox_with_mail: Contato!


<a href="https://www.linkedin.com/in/wanielton-ferreira" target="_blank" >
  <img alt="Linkedin - Wanielton Ferreira" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:wanieltonferreira@gmail.com" target="_blank" >
  <img alt="Email - Wanielton Ferreira" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Made with :coffee: and ❤️ by Wanielton Ferreira.
