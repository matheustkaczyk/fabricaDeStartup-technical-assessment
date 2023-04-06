import express, { Application, Router } from "express";
import dotenv from "dotenv";

import Database from "./database";

import { UserController } from "./controllers/userController";

export default class App {
  private app: Application;
  private port: number;
  private db: Database;
  private router: Router;
  private userController: UserController;

  constructor() {
    this.app = express();
    this.config();
    this.port = Number(process.env.PORT) || 3000;
    this.db = new Database();
    this.userController = new UserController();
    this.router = Router();
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
    this.router.post("/auth/signup", this.userController.createUser.bind(this.userController));
    this.router.post("/auth/login", this.userController.authenticateUser.bind(this.userController));

    this.app.use(this.router);
  }
}