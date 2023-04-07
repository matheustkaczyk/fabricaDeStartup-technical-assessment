import ICategory from "./ICategory";

export default interface IProduct {
    name: string;
    categories: ICategory[];
    qty: number;
    price: number;
};
