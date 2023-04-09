import Joi from 'joi';

export const userSchema = Joi.object({
    email: Joi.string()
    .email()
    .required()
    .messages({
        'string.email': 'Email must be a valid email',
        'string.empty': 'Email is required',
    }),
    password: Joi.string()
    .min(6)
    .max(30)
    .required()
    .messages({
        'string.min': 'Password must be at least 6 characters',
        'string.max': 'Password must be at most 30 characters',
        'string.empty': 'Password is required',
    }),
    name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.min': 'Name must be at least 3 characters',
        'string.max': 'Name must be at most 30 characters',
        'string.empty': 'Name is required',
    }),
    type: Joi.string()
    .valid('admin', 'user')
    .required()
    .messages({
        'any.required': 'Type is required',
        'any.only': 'Type must be either admin or user',
    }),
});

export const authenticateUserSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Email must be a valid email',
            'string.empty': 'Email is required',
        }),
    password: Joi.string()
        .min(6).max(30)
        .required()
        .messages({
            'string.min': 'Password must have at least 6 characters',
            'string.max': 'Password must have at most 30 characters'
        }),
});
