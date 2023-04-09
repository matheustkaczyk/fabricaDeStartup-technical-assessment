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

    async categoriesExist(categories: ICategory[]): Promise<ICategory[]> {
        const categoriesArr: ICategory[] = [];

        for (const category of categories) {
            const categoryExists = await this.getCategoryByName(category.name);
    
            if (categoryExists) {
                categoriesArr.push(categoryExists);
            }
        }

        categories = categoriesArr;

        return categories;
    }
}