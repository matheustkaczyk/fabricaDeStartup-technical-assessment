import mongoose, { Document } from 'mongoose';

import CategoryType from './customTypes/CategoryType';
import ICategory from '../../interfaces/ICategory';

export interface IProductDocument extends Document {
    name: string;
    categories: ICategory[];
    qty: number;
    price: number;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: {
        type: [CategoryType],
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
