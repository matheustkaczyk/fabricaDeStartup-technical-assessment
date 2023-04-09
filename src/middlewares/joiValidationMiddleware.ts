import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';

export default class JoiValidationMiddleware {
    validate(schema: ObjectSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            const { error } = schema.validate(req.body);
            if (error) {
                res.status(400).json({ error: error.details[0].message });
            } else {
                next();
            }
        }
    }
}
