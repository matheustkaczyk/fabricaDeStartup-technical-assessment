# Online Menu API
## Description
##### This is an API built as part of the technical challenge for the Node.js developer position at Fábrica de Startups. The API consists of an online menu system that allows for the creation and management of products and categories. Additionally, it has user authentication and authorization.

Instructions to run the project locally
Clone the repository to your local machine:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Install the project dependencies:
```
npm install
```

Create a .env file at the root of the project with the following environment variables:
```
PORT=3000
MONGO_URI=<sua-url-do-banco-de-dados-mongodb>
JWT_SECRET=<sua-chave-secreta-para-o-jsonwebtoken>
CORS_ORIGIN=<url-informando-origem-cors>
```

Start the server:
```
npm start
```

Categories are pre-seeded into the server using a seed file. To run the seed:
```
npm run seed
```

## Tecnologias/Frameworks/Bibliotecas usadas e a razão da escolha delas
- Node.js - chosen for being a scalable back-end development platform with a large community;
- Express - used as a framework for handling routes and HTTP requests in a simple and fast way;
- TypeScript - chosen to increase the code's security and make it easier to maintain;
- MongoDB - chosen as the database for storing data, as it is a scalable and flexible option that integrates well with Node.js;
- Mongoose - used as a MongoDB object modeling tool for Node.js;
- Joi - chosen for input data validation, as it is a simple and useful library for this task;
- JsonWebToken - used for JWT authentication;
- Cors - chosen to enable CORS access to the API's resources;
- Nodemon - used to automatically restart the server whenever there are changes to the code;
- Dotenv - a library used to load environment variables from a .env file.

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

## **Sobre o autor**

Obrigado por ter lido até aqui!

Eu me chamo Matheus, e sou desenvolvedor web fullstack. Comecei meus estudos no ano de 2020 e estou me apaixonando cada dia que passa, através dos estudos, por tecnologia e desenvolvimento. Esse projeto e esse README foram desenvolvidos como um desafio técnico. Eu empenhei muito carinho na construção de cada linha.

[Você pode olhar mais dos meus repositórios aqui](https://github.com/matheustkaczyk)

[Ou se conectar comigo no linkedin!](https://www.linkedin.com/in/matheustkaczykribeiro/)
