import mongoose from "mongoose";
import CategoryType from "./customTypes/CategoryType";

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    parent: {   
        type: CategoryType,
    },
});
