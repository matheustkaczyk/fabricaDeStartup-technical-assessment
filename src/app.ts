import express, { Application } from "express";
import dotenv from "dotenv";

import Database from "./database";

import { UserController } from "./controllers/userController";
import { CategoryController } from "./controllers/categoryController";
import { ProductController } from "./controllers/productController";

export default class App {
  private app: Application;
  private port: number;
  private db: Database;
  private userController: UserController;
  private categoryController: CategoryController;
  private productController: ProductController

  constructor() {
    this.app = express();
    this.config();
    this.port = Number(process.env.PORT) || 3000;
    this.db = new Database();
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
    this.app.use(express.json());
    dotenv.config();
  }

  private setupRoutes() {
    // USER ROUTES
    this.app.post("/auth/signup", this.userController.createUser.bind(this.userController));
    this.app.post("/auth/login", this.userController.authenticateUser.bind(this.userController));

    // CATEGORY ROUTES
    this.app.get("/category", this.categoryController.getCategories.bind(this.categoryController));

    // PRODUCT ROUTES
    this.app.get("/product", this.productController.getProducts.bind(this.productController));
    this.app.get("/product/:id", this.productController.getProductById.bind(this.productController));
    this.app.post("/product", this.productController.createProduct.bind(this.productController));
    this.app.patch("/product/:id", this.productController.updateProduct.bind(this.productController));
    this.app.delete("/product/:id", this.productController.deleteProduct.bind(this.productController));
  }
}