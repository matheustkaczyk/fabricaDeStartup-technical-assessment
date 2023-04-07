import { Category } from "../database/schemas/categorySchema";

import ICategory from "../interfaces/ICategory";

export class CategoryModel {
    async getCategories(): Promise<ICategory[]> {
        const categories = await Category.find() as ICategory[];

        return categories;
    }
}