import mongoose from 'mongoose';
import CategoryType from './customTypes/CategoryType';

export const productSchema = new mongoose.Schema({
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
