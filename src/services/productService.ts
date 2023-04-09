import { CreateProductDto, UpdateProductDto } from "../dto/productDto";

import { ProductModel } from "../models/productModel";
import { CategoryModel } from "../models/categoryModel";

import IProduct from "../interfaces/IProduct";
import ICategory from "../interfaces/ICategory";

export class ProductService {
    private productModel: ProductModel;
    private categoryModel: CategoryModel;

    constructor() {
        this.productModel = new ProductModel();
        this.categoryModel = new CategoryModel();
    }

    async getProducts():Promise<IProduct[]> {
        return await this.productModel.getProducts();
    }

    async getProductById(id: string) {
        return await this.productModel.getProductById(id);
    }

    async createProduct({ name, categories, qty, price }: CreateProductDto): Promise<void> {
        const categoriesArr: ICategory[] = [];

        for (const category of categories) {
            const categoryExists = await this.categoryModel.getCategoryByName(category.name);
    
            if (categoryExists) {
                categoriesArr.push(categoryExists);
            }
        }

        categories = categoriesArr;

        return await this.productModel.createProduct({ name, categories, qty, price });
    }

    async updateProduct(id: string, { name, categories, qty, price }: UpdateProductDto):Promise<void> {
        return await this.productModel.updateProduct(id, { name, categories, qty, price });
    }

    async deleteProduct(id: string): Promise<void> {
        return await this.productModel.deleteProduct(id);
    }
}
