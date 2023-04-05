import express, { Application } from "express";
import Database from "./src/database/database";

export default class App {
  private app: Application;
  private port: number;
  private db: Database;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
    this.db = new Database();
  }

  public async start() {
    await this.db.connect();
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}