import mongoose, { Document } from "mongoose";

export interface ICategoryDocument extends Document {
    name: string;
    parent: String | null;
};

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {   
        type: String,
        default: null,
    },
});

export const Category = mongoose.model<ICategoryDocument>("Category", categorySchema);
