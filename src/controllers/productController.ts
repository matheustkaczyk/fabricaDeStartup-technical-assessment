import { Request, Response } from "express";
import { ProductService } from "../services/productService";
import IProduct from "../interfaces/IProduct";

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

    async getProductById(req: Request, res: Response) {
        try {
            const { id } = req.params;
    
            const product = await this.productService.getProductById(id);
    
            res.status(200).json(product);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });    
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const { name, categories, qty, price }: IProduct = req.body;
    
            await this.productService.createProduct({ name, categories, qty, price });
    
            res.status(201);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });    
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, categories, qty, price }: IProduct = req.body;
    
            await this.productService.updateProduct(id, { name, categories, qty, price });
    
            res.status(200);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });    
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;
    
            await this.productService.deleteProduct(id);
    
            res.status(200);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });    
        }
    }
}