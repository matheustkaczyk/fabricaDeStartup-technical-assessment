import { SchemaType } from "mongoose";

import ICategory from "../../../interfaces/ICategory";

export default class CategoryType extends SchemaType {
    constructor(key: string, options: any) {
        super(key, options, "Category");
    }

    cast(val: ICategory) {
        if (val && val.name && val.parent && val.products)
        {
            return val;
        }

        return null;
    }
}