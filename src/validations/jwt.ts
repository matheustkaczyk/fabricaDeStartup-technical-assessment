import jwt from 'jsonwebtoken';

export default class Jwt {
    private secret: string;

    constructor(secret?: string) {
        this.secret = (process.env.SECRET || secret) as string;
    }

    public sign(payload: any): string {
        if (!this.secret) {
            throw new Error('Secret is not defined');
        }
        
        return jwt.sign(payload, this.secret);
    }

    public verify(token: string): any {
        return jwt.verify(token, this.secret);
    }
}