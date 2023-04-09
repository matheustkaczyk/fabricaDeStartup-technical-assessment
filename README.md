# API Cardápio Online
## Descrição
##### Essa é uma API construída como parte do desafio técnico para a vaga de desenvolvedor node.js na empresa Fábrica de Startups. A API consiste em um sistema de cardápio online que permite criar e gerenciar produtos e categorias. Além disso, possui autenticação e autorização de usuários.

Instruções para rodar o projeto localmente
Clone o repositório em sua máquina local:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Instale as dependências do projeto:
```
npm install
```

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
```
PORT=3000
MONGO_URI=<sua-url-do-banco-de-dados-mongodb>
JWT_SECRET=<sua-chave-secreta-para-o-jsonwebtoken>
```

Inicie o servidor:
```
npm start
```

## Tecnologias/Frameworks/Bibliotecas usadas e a razão da escolha delas
- Node.js - escolhido por ser uma plataforma de desenvolvimento back-end escalável e com grande comunidade;
- Express - utilizado como framework para lidar com rotas e requisições HTTP de forma simples e rápida;
- TypeScript - escolhido para aumentar a segurança do código e torná-lo mais fácil de ser mantido;
- MongoDB - escolhido como banco de dados para o armazenamento dos dados, por ser uma opção escalável e flexível, além de se integrar bem com o Node.js;
- Mongoose - utilizado como uma ferramenta de modelagem de objetos do MongoDB para o Node.js;
- Joi - escolhido para a validação dos dados de entrada, por ser uma biblioteca simples e muito útil para essa tarefa;
- JsonWebToken - utilizado para a autenticação JWT;
- Cors - escolhido para habilitar o acesso CORS aos recursos da API;
- Nodemon - utilizado para reiniciar automaticamente o servidor sempre que houver mudanças no código;
- Dotenv - biblioteca utilizada para carregar variáveis de ambiente a partir de um arquivo .env.

## Rotas da API
### Autenticação e autorização
