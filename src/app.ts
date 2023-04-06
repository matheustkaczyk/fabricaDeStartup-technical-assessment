import express, { Application } from "express";

import Database from "./database";

import { UserController } from "./controllers/userController";

export default class App {
  private app: Application;
  private port: number;
  private db: Database;
  private userController: UserController;

  constructor() {
    this.app = express();
    this.config();
    this.port = Number(process.env.PORT) || 3000;
    this.db = new Database();
    this.userController = new UserController();
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
  }

  private setupRoutes() {
    this.app.post("/auth/signup", this.userController.createUser.bind(this.userController));
  }
}