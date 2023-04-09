import Joi from 'joi';


export const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Name should be a type of text',
        'string.empty': 'Name cannot be an empty field',
        'string.min': 'Name must be between at least 3 characters long',
        'string.max': 'Name must be at most 30 characters long',
        'any.required': 'Name is a required field',
    }),
    categories: Joi.array().items(Joi.object({ name: Joi.string(), parent: Joi.string().allow(null) })).required().messages({
        'array.base': 'Categories must be an array of strings',
        'array.empty': 'Categories cannot be an empty field',
        'any.required': 'Categories is a required field',
    }),
    qty: Joi.number().min(0).required().messages({
        'number.base': 'Quantity should be a type of number',
        'number.empty': 'Quantity cannot be an empty field',
        'number.min': 'Quantity must be a number greater than 0',
        'any.required': 'Quantity is a required field',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price should be a type of number',
        'number.empty': 'Price cannot be an empty field',
        'number.min': 'Price must be a number greater than 0',
        'any.required': 'Price is a required field',
    }),
});