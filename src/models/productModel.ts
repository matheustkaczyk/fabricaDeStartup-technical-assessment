import { Product } from '../database/schemas/productSchema';

export class ProductModel {
    async getProducts() {
        return await Product.find();
    }
}