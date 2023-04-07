import { Product } from '../database/schemas/productSchema';
import { CreateProductDto, UpdateProductDto } from '../dto/productDto';
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

    async createProduct({ name, categories, qty, price }: CreateProductDto): Promise<void> {
        const newProduct = new Product({
            name,
            categories,
            qty,
            price
        });

        await newProduct.save();
    }

    async updateProduct(id: string, { name, categories, qty, price }: UpdateProductDto): Promise<void> {
        const foundProduct = await this.getProductById(id);

        await Product.findOneAndUpdate({ _id: id }, {
            name: name || foundProduct.name,
            categories: categories || foundProduct.categories,
            qty: qty || foundProduct.qty,
            price: price || foundProduct.price
        });
    }
}