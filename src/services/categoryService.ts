import ICategory from "../interfaces/ICategory";
import { CategoryModel } from "../models/categoryModel";

export class CategoryService {
    private categoryModel: CategoryModel;

    constructor() {
        this.categoryModel = new CategoryModel();
    }

    async getCategories(): Promise<ICategory[]> {
        const categories = await this.categoryModel.getCategories();

        return categories;
    }
}