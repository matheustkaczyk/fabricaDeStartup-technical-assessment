import ICategory from "../interfaces/ICategory";

export interface CreateProductDto {
    name: string;
    categories: ICategory[];
    qty: number;
    price: number;
}

export interface UpdateProductDto {
    name?: string;
    categories?: ICategory[];
    qty?: number;
    price?: number;
}