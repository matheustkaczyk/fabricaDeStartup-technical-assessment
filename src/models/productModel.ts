import { Product } from '../database/schemas/productSchema';
import IProduct from '../interfaces/IProduct';

export class ProductModel {
    async getProducts(): Promise<IProduct[]> {
        return await Product.find();
    }

    async getProductById(id: string): Promise<IProduct> {
        const foundProduct = await Product.findById(id);

        if (!foundProduct) {
            throw new Error('Product not found');
        }

        return foundProduct;
    }
}