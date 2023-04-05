import mongoose, { Document } from 'mongoose';

import CategoryType from './customTypes/CategoryType';
import IProduct from '../../interfaces/IProduct';

export interface IProductDocument extends IProduct, Document {}

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
