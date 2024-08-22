# API-Structure

Bem-vindo ao repositório da **Minha Aplicação de API REST**! Este projeto fornece uma estrutura de API para facilitar a criação de APIs RESTful utilizando Fastify. Abaixo você encontrará detalhes sobre as dependências utilizadas, a estrutura do projeto, a criação de rotas e instruções sobre como começar.

## 🛠️ Dependências

Este projeto utiliza as seguintes dependências:

- **[@fastify/helmet](https://www.npmjs.com/package/@fastify/helmet)**: `^11.1.1`
  - **Motivo**: Adiciona cabeçalhos de segurança HTTP para proteger a aplicação contra ataques comuns, como XSS (Cross-Site Scripting) e clickjacking.

- **[@types/node](https://www.npmjs.com/package/@types/node)**: `^22.3.0`
  - **Motivo**: Fornece as definições de tipos para o Node.js, permitindo uma melhor integração com TypeScript e evitando erros de tipagem.

- **[fastify](https://www.npmjs.com/package/fastify)**: `^4.28.1`
  - **Motivo**: Framework para criar APIs de maneira rápida e eficiente, com suporte a plugins e uma abordagem de alto desempenho.

- **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**: `^2.0.0`
  - **Motivo**: Ferramenta para desenvolvimento que permite a execução e depuração de código TypeScript com recarga automática e melhoria no tempo de execução.

- **[yoctocolors-cjs](https://www.npmjs.com/package/yoctocolors-cjs)**: `^2.1.2`
  - **Motivo**: Biblioteca para adicionar cores e estilos ao terminal, útil para fornecer feedback visual durante o desenvolvimento.

- **[typescript](https://www.npmjs.com/package/typescript)**: `^5.0.0`
  - **Motivo**: Compilador TypeScript usado para transpilar o código TypeScript para JavaScript.

## 🚀 Objetivo

A **Minha Aplicação de API REST** foi projetada para simplificar o desenvolvimento de APIs RESTful. Utilizando o framework Fastify, ela oferece um ponto de partida eficiente e seguro para criar APIs robustas e de alto desempenho. A integração com o Helmet melhora a segurança, enquanto o suporte a TypeScript e ferramentas como ts-node-dev garantem um ambiente de desenvolvimento ágil e produtivo.

## 📁 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **`src/`**: Contém o código-fonte da aplicação.
  - **`routes/`**: Contém os arquivos de definição de rotas. Cada arquivo segue o formato `{nome}.{metodo}.ts`, onde `{metodo}` pode ser `get`, `post`, `put`, etc. Exemplo: `home.get.ts`.
  - **`pages/`**: Contém arquivos HTML que podem ser enviados diretamente pela API.
  - **`types/`**: Contém definições de tipos TypeScript para garantir a tipagem correta em todo o projeto.
  - **`utils/`**: Contém utilitários e classes auxiliares.
    - **`api.ts`**: Define a classe `customApi` com métodos personalizados para a API.
    - **`functions.ts`**: Contém funções auxiliares como leitura de HTML e impressão de rotas.
    - **`routeBuilder.ts`**: Facilita a criação de rotas com uma interface fluente.
    - **`routeProvider.ts`**: Carrega e registra as rotas na aplicação.

## 🛠️ Criando Rotas

As rotas são definidas em arquivos dentro do diretório `src/routes/`. Cada arquivo define uma rota específica no formato `{nome}.{metodo}.ts`. 

### Exemplo de Arquivo de Rota

**Arquivo: `src/routes/home.get.ts`**

```typescript
import routesProps from "../types/routes";
import routeBuilder from "../utils/routeBuilder";

const route: routesProps = new routeBuilder()
  .setPath("/")
  .setMethod("get")
  .setExec((req, reply) => {
    return reply.code(200).send("<h1>ola World!</h1>");
  });

export default route;
```

Neste exemplo, o arquivo define uma rota que responde ao método GET no caminho `/` com a mensagem "Olá World!" em HTML.

**Estrutura de Arquivos**
- `src/routes/*.ts`: Arquivos que definem as rotas, onde cada rota é criada com a classe `routeBuilder`.
- `src/utils/routeBuilder.ts`: Fornece uma interface fluente para criar rotas.

**🧩 Como Funciona**

**Configuração Inicial:**  
Após clonar o repositório, instale as dependências utilizando o comando `npm install` ou `yarn install`.

**Carregamento de Rotas:**
- O `routeProvider` carrega as rotas a partir do diretório `src/routes/` e as registra na aplicação.
- O `routeBuilder` facilita a configuração de cada rota, definindo o caminho, método e a função de execução.

**Iniciando a Aplicação:**
- Para iniciar a aplicação no modo desenvolvimento, use o comando `npm run dev` ou `yarn dev`. Isso executa o código com recarga automática e suporte a TypeScript.
- Para iniciar a aplicação em produção, compile o TypeScript para JavaScript usando `npm run build` ou `yarn build` e então execute o código compilado com `npm start` ou `yarn start`.

**📄 Scripts**
- **dev:** `ts-node-dev src/main.ts`  
  Executa a aplicação em modo de desenvolvimento com recarga automática.
  
- **start:** `node main.js`  
  Executa a aplicação em modo de produção após a compilação.

**📚 Documentação**
Para mais detalhes sobre o Fastify e seus plugins, consulte a [documentação oficial do Fastify](https://www.fastify.io/docs/latest/). Para informações adicionais sobre TypeScript e suas ferramentas, consulte a [documentação do TypeScript](https://www.typescriptlang.org/docs/).

