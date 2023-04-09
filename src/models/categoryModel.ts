import { Category } from "../database/schemas/categorySchema";

import ICategory from "../interfaces/ICategory";

export class CategoryModel {
    async getCategories(): Promise<ICategory[]> {
        const categories = await Category.find() as ICategory[];

        return categories;
    }

    async getCategoryByName(name: string): Promise<ICategory | null> {
        const foundCategory = await Category.findOne({ name });

        if (foundCategory) {
            return foundCategory.toObject() as ICategory;
          }
        
          return null;
    }
}