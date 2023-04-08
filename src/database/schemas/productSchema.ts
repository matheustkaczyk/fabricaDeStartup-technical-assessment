import mongoose, { Document } from 'mongoose';

import { ICategoryDocument, categorySchema } from './categorySchema';

export interface IProductDocument extends Document {
    name: string;
    categories: ICategoryDocument[];
    qty: number;
    price: number;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: {
        type: [categorySchema],
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

export const Product = mongoose.model<IProductDocument>('Product', productSchema);
