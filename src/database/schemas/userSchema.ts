import mongoose, { Document } from "mongoose";
import IUser from "../../interfaces/IUser";

export interface IUserDocument extends IUser, Document {}

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
