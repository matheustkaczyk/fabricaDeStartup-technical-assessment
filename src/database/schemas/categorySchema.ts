import mongoose from "mongoose";

import CategoryType from "./customTypes/CategoryType";
import ICategory from "../../interfaces/ICategory";

export interface ICategoryModel extends ICategory, mongoose.Document {}

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    parent: {   
        type: CategoryType,
    },
});

export const Category = mongoose.model<ICategory>("Category", categorySchema);
