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
CORS_ORIGIN=<url-informando-origem-cors>
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

#### POST /auth/signup
Cria um novo usuário.

Requisição:
```
{
  "email": "usuario@exemplo.com",
  "password": "senha",
  "name": "Nome do usuário",
  "type": "tipo de usuário (admin ou user)"
}
```


Resposta:

Status Code 200 ou 404

#### POST /auth/login
Autentica um usuário.

Requisição:
```
{
  "email": "usuario@exemplo.com",
  "password": "senha"
}
```

Resposta:
```
{
  "token": "token de autenticação"
}
```

### Categorias
#### GET /category
Retorna todas as categorias.

#### É necessário token JWT

Resposta:
```
[
  {
	"_id": "Id da categoria",
	"name": "Nome da categoria",
	"parent": "Categoria pai ou nulo",
	"__v": 0
  },
]
```

### Produtos

#### GET /product
Retorna todos os produtos.

#### É necessário token JWT

Resposta:

```
[
  {
    "_id": "id do produto",
    "name": "nome do produto",
    "categories": [
      {
        "_id": "id da categoria",
        "name": "nome da categoria",
        "parent": "nome da categoria pai"
      }
    ],
    "qty": "quantidade numérica",
    "price": "preço"
  }
]
```

#### GET /product/:id
Retorna um produto por ID nos parâmetros.

Resposta:
```
{
    "_id": "id do produto",
    "name": "nome do produto",
    "categories": [
      {
        "_id": "id da categoria",
        "name": "nome da categoria",
        "parent": "nome da categoria pai"
      }
    ],
    "qty": "quantidade numérica",
    "price": "preço"
  }
```

#### POST /product
Cria um novo produto

Requisição:
```
{
  "name": "Nome do produto",
  "categories": [
    {
	"name": "Nome da categoria",
	"parent": "Categoria pai (se houver)"
    }
],
"qty": "quantidade",
"price": "preço"
}
```

#### PATCH /product/:id
Atualiza as informações de um produto existente com base em seu ID.
Todos os campos da requisição são opcionais, só será atualizado os campos enviados.

Requisição:
```
{
  "name": "Nome do produto",
  "qty": quantidade,
  "categories": [
    {
        "name": "nome da categoria",
        "parent": "nome da categoria pai"
     }
  ]
}
```

#### DELETE /product/:id
Remove um produto do sistema com base em seu ID.
