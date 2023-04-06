import jwt from 'jsonwebtoken';

export default class Jwt {
    private secret: string;

    constructor(secret?: string) {
        this.secret = secret || process.env.SECRET as string;
    }

    public sign(payload: any): string {
        return jwt.sign(payload, this.secret);
    }

    public verify(token: string): any {
        return jwt.verify(token, this.secret);
    }
}