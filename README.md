# Online Menu API
## Description
##### This is an API built as part of the technical challenge for the Node.js developer position at Fábrica de Startups. The API consists of an online menu system that allows for the creation and management of products and categories. Additionally, it has user authentication and authorization.

Instructions to run the project locally
Clone the repository to your local machine:
```
git clone https://github.com/matheustkaczyk/fabricaDeStartup-technical-assessment.git
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
- **Node.js** - chosen for being a scalable back-end development platform with a large community;
- **Express** - used as a framework for handling routes and HTTP requests in a simple and fast way;
- **TypeScript** - chosen to increase the code's security and make it easier to maintain;
- **MongoDB** - chosen as the database for storing data, as it is a scalable and flexible option that integrates well with Node.js;
- **Mongoose** - used as a MongoDB object modeling tool for Node.js;
- **Joi** - chosen for input data validation, as it is a simple and useful library for this task;
- **JsonWebToken** - used for JWT authentication;
- **Cors** - chosen to enable CORS access to the API's resources;
- **Nodemon** - used to automatically restart the server whenever there are changes to the code;
- **Dotenv** - a library used to load environment variables from a .env file.

## API Routes
### Authentication and Authorization

#### POST /auth/signup
Creates a new user.

Request:
```
{
  "email": "user@example.com",
  "password": "password",
  "name": "User's name",
  "type": "user type (admin or user)"
}
```


Response:

**Status Code 200 or 404**

#### POST /auth/login
Authenticates a user.

Request:
```
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:
```
{
  "token": "authentication token"
}
```

### Categories
#### GET /category
Returns all categories.

#### JWT token required

Response:
```
[ 
	{
	  "_id": "Category ID",
	  "name": "Category name",
	  "parent": "Parent category or null",
	  "__v": 0 
	},
]
```

### Products

#### GET /product
Returns all products.

#### JWT token required

Response:

```
[
	{
	  "_id": "product id",
	  "name": "product name",
	  "categories": [
	  {
	    "_id": "category id",
	    "name": "category name",
	    "parent": "parent category name"
	   }
          ],
    	  "qty": "numerical quantity",
    	  "price": "price"
  }
]
```

#### GET /product/:id
Returns a product based on its ID.

Response:
```
{
    "_id": "product id",
    "name": "product name",
    "categories": [
      {
        "_id": "category id",
        "name": "category name",
        "parent": "parent category name"
      }
    ],
    "qty": "numerical quantity",
    "price": "price"
  }
```

#### POST /product
Creates a new product

Request:
```
{
  "name": "product name",
  "categories": [
    {
	"name": "category name",
	"parent": "parent category name (if any)"
    }
],
"qty": "quantity",
"price": "price"
}
```

#### PATCH /product/:id
Updates the information of an existing product based on its ID.
All fields in the request are optional, only the fields sent will be updated.

Request:
```
{
  "name": "product name",
  "qty": quantity,
  "categories": [
    {
        "name": "category name",
        "parent": "parent category name"
     }
  ]
}
```

#### DELETE /product/:id
Removes a product from the system based on its ID.

## **About the author**

Thank you for reading until here!

My name is Matheus and I am a full-stack web developer. I started my studies in 2020 and I am falling more in love with technology and development every day through my studies. This project and this README were developed as a technical challenge. I put a lot of care into building every line.

[You can check out more of my repositories here](https://github.com/matheustkaczyk)

[Or connect with me on LinkedIn!](https://www.linkedin.com/in/matheustkaczykribeiro/)
