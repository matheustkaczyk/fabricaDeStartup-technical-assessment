import Joi from 'joi';

export const userSchema = Joi.object({
    email: Joi.string().email().required().message('Email must be a valid email'),
    password: Joi.string().min(6).max(30).required().message('Password must be between 6 and 30 characters'),
    name: Joi.string().min(3).max(30).required().message('Name must be between 3 and 30 characters'),
    type: Joi.string().valid('admin', 'user').required().message('Type must be either admin or user'),
});

export const authenticateUserSchema = Joi.object({
    email: Joi.string().email().required().message('Email must be a valid email'),
    password: Joi.string().min(6).max(30).required().message('Password must be between 6 and 30 characters'),
});
