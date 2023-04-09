import Joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';

export default class JoiValidationMiddleware {
    private schema: ObjectSchema;

    constructor(schema: ObjectSchema) {
        this.schema = schema;
    }

    validate(req: Request, res: Response, next: NextFunction) {
        const { error } = this.schema.validate(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        } else {
            next();
        }
    }
}
