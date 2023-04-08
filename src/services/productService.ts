import { CreateProductDto, UpdateProductDto } from "../dto/productDto";

import { ProductModel } from "../models/productModel";

import IProduct from "../interfaces/IProduct";

export class ProductService {
    private productModel: ProductModel;

    constructor() {
        this.productModel = new ProductModel();
    }

    async getProducts():Promise<IProduct[]> {
        return await this.productModel.getProducts();
    }

    async getProductById(id: string) {
        return await this.productModel.getProductById(id);
    }

    async createProduct({ name, categories, qty, price }: CreateProductDto): Promise<void> {
        return await this.productModel.createProduct({ name, categories, qty, price });
    }

    async updateProduct(id: string, { name, categories, qty, price }: UpdateProductDto):Promise<void> {
        return await this.productModel.updateProduct(id, { name, categories, qty, price });
    }

    async deleteProduct(id: string): Promise<void> {
        return await this.productModel.deleteProduct(id);
    }
}
