import { ProductModel } from "../models/productModel";

export class ProductService {
    private productModel: ProductModel;

    constructor() {
        this.productModel = new ProductModel();
    }
}