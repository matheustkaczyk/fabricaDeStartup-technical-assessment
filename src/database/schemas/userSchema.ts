import mongoose, { Document } from "mongoose";
import IUser from "../../interfaces/IUser";

export interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    type: IUser["type"];
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model<IUserDocument>("User", userSchema);
