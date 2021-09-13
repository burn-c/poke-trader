<h1 align="center">
  <img alt="Poke Trade" title="Poke Trade" src="./public/logoPokemon.png" width="400px" />
  <br/>
  Poke Trade
</h1>

<h3 align="center">
Faça uma troca justa
</h3>
<h5 align="center">
  Feito com NextJS
</h5>

<p align="center">
  <a href="#---instalar-e-executar">Instalar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#---live">Acessar App</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<hr>

<h1 align="center">
  ⚙ Instalar e executar
</h1>


1. Clonar repositório:

```sh
git clone git@github.com:burn-c/poke-trader.git
```
2. Instalar as dependências utilizando o comando:
```sh
yarn
```
3. Configurar ENVs:
Vamos precisar adicionar duas variáveis ambiente:
- `FAUNADB_KEY` responsavél pela conexão com nosso banco de dados - [como criar](https://docs.fauna.com/fauna/current/start/)
   - Basicamente para este projeto só precisamos criar um banco de dados, criar a collection `trades` e criar uma `key` como admin. 
- `FAIR_PERCENTAGE` valor de 0 a 100 que define a porcentagem de diferença maxima para efetuar o trade.

2. Executar o projeto:

```sh
yarn dev
```

## :heavy_check_mark: Regras

- Nesta aplicação você poderar efetuar simular um trade de pokemons entre dois jogadores
- Maximo de pokemons permitido por jogador: 6
- Para concluir a troca, a diferença da soma dos XP entre os jogadores não pode ser maior que o definido em `FAIR_PERCENTAGE`, por padrão essa diferença é `10%`
- Na parte supeior da tela será exibidos avisos avisando se a troca e justa ou não.
- Todas trocas efetuadas com sucesso estão disponível para consulta na página de `Historico de trades` que podera ser acessa pelo botão `Historico` no canto superior da tela.

## 🛠 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

-  [Next.js](https://nextjs.org/)
-  [FaunaDB](https://fauna.com/)
-  [Chakra UI](https://chakra-ui.com/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [VS Code](https://code.visualstudio.com/)

---

## :rocket: Live
Teste a aplicação e deixe seu feedback
### [Acessar](https://poke-trade-burn.herokuapp.com/)

Encontrou algum erro ? Tem alguma dica ? Enviei uma pull request! Ficarei feliz em receber! 😁

Made with 🔥 by Carlos Oliveira ( BurN  ) - [My linkedin!](https://www.linkedin.com/in/carlosoliveiradev/)
