import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    async getProducts(req: Request, res: Response) {
        try {
            
            const products = await this.productService.getProducts();
    
            res.status(200).json(products);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });    
        }
    }

}