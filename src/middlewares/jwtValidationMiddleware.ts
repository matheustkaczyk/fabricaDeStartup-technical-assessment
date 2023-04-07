import { Request, Response, NextFunction } from 'express';
import Jwt from '../validations/jwt';

export default class JwtValidationMiddleware {
    private jwt: Jwt;

    constructor() {
        this.jwt = new Jwt();
    }

    public async validateJwt(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                throw new Error('Token not provided');
            }

            const payload = await this.jwt.verify(token);

            req.body.payload = payload;

            next();
        } catch (error: Error | any) {
            res.status(401).json({ message: error.message });
        }
    }
}