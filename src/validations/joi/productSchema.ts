import Joi from 'joi';

export const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().message('Name must be between 3 and 30 characters'),
    categories: Joi.array().items(Joi.string()).required().message('Categories must be an array of strings'),
    qty: Joi.number().min(0).required().message('Quantity must be a number greater than 0'),
    price: Joi.number().min(0).required().message('Price must be a number greater than 0'),
});