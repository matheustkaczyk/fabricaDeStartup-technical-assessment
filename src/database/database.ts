import mongoose from "mongoose";

export default class Database {
    private uri: string;

    constructor() {
        this.uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
    }

    public async connect() {
        try {
            await mongoose.connect(this.uri);
            console.log('Connected to database');
          } catch (error) {
            console.log('Error connecting to database:', error);
          }
    }

    public async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Disconnected from database")
        } catch (error) {
            console.log("Error disconnecting from database:", error);
        }
    }
}