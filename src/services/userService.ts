import { AuthenticateUserDto } from "../dto/userDto";
import { UserModel } from "../models/userModel";

import Jwt from "../validations/jwt";

import Md5 from "../utils/md5";

export class UserService {
    private userModel: UserModel
    private jwt: Jwt;
    private md5: Md5;

    constructor() {
        this.userModel = new UserModel();
        this.jwt = new Jwt();
        this.md5 = new Md5();
    }

    public async authenticateUser({ email, password }: AuthenticateUserDto): Promise<string | Error> {
        const hashedPassword = this.md5.hash(password);

        const user = await this.userModel.authenticateUser({ email, password: hashedPassword });

        if (user instanceof Error) {
            return user;
        }

        const token = this.jwt.sign({ id: user.id });

        return token;
    }
}