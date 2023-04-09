import express, { Application } from "express";
import dotenv from "dotenv";
import cors from 'cors';

import Database from "./database";

import { UserController } from "./controllers/userController";
import { CategoryController } from "./controllers/categoryController";
import { ProductController } from "./controllers/productController";

import JwtValidationMiddleware from "./middlewares/jwtValidationMiddleware";
import JoiValidationMiddleware from "./middlewares/joiValidationMiddleware";

import { createProductSchema, updateProductSchema } from "./validations/joi/productSchema";
import { userSchema, authenticateUserSchema } from "./validations/joi/userSchema";

export default class App {
  private app: Application;
  private port: number;
  private db: Database;
  private userController: UserController;
  private categoryController: CategoryController;
  private productController: ProductController
  private jwtMiddleware: JwtValidationMiddleware;
  private joiMiddleware: JoiValidationMiddleware;

  constructor() {
    this.app = express();
    this.config();
    this.port = Number(process.env.PORT) || 3000;
    this.db = new Database();
    this.jwtMiddleware = new JwtValidationMiddleware();
    this.joiMiddleware = new JoiValidationMiddleware();

    this.userController = new UserController();
    this.categoryController = new CategoryController();
    this.productController = new ProductController();

    this.setupRoutes();
  }

  public async start() {
    await this.db.connect();
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }

  private config() {
    const corsOptions = {
      origin: process.env.CORS_ORIGIN || "*",
    }

    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    dotenv.config();
  }

  private setupRoutes() {
    // USER ROUTES
    this.app.post("/auth/signup", this.joiMiddleware.validate(userSchema), this.userController.createUser.bind(this.userController));
    this.app.post("/auth/login", this.joiMiddleware.validate(authenticateUserSchema), this.userController.authenticateUser.bind(this.userController));

    // CATEGORY ROUTES
    this.app.get("/category", this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.categoryController.getCategories.bind(this.categoryController));

    // PRODUCT ROUTES
    this.app.get("/product", this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.productController.getProducts.bind(this.productController));
    this.app.get("/product/:id", this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.productController.getProductById.bind(this.productController));
    this.app.post("/product", this.joiMiddleware.validate(createProductSchema), this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.productController.createProduct.bind(this.productController));
    this.app.patch("/product/:id", this.joiMiddleware.validate(updateProductSchema), this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.productController.updateProduct.bind(this.productController));
    this.app.delete("/product/:id", this.jwtMiddleware.validateJwt.bind(this.jwtMiddleware), this.productController.deleteProduct.bind(this.productController));
  }
}