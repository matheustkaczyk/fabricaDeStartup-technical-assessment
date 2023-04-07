import { Request, Response } from "express";

import { CategoryService } from "../services/categoryService";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    async getCategories(req: Request, res: Response) {
        try {
            const categories = await this.categoryService.getCategories();

            res.status(200).json(categories);
        } catch (error: Error | any) {
            res.status(404).json({ message: error.message });
        }
    }
}