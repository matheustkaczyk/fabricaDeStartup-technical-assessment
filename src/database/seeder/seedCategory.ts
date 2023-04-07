import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

import { Category } from "../schemas/categorySchema";

const categories = [
    { name: 'Alimentos', parent: null },
    { name: 'Hamburgueres', parent: 'Alimentos' },
    { name: 'Pizza', parent: 'Alimentos' },
    { name: 'Sobremesas', parent: 'Alimentos' },
    { name: 'Bebidas', parent: null },
    { name: 'Refrigerantes', parent: 'Bebidas' },
    { name: 'Sucos', parent: 'Bebidas' },
];

mongoose.connect(process.env.MONGODB_URI as string)
.then(() => {
    console.log('Connected to MongoDB');
    Category.insertMany(categories)
    .then(() => {
        console.log('Categories inserted');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
        mongoose.connection.close();
    });
}).catch((err) => {
    console.log(err);
});
