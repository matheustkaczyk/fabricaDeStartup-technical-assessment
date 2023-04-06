import { User } from "../database/schemas/userSchema";

import IUser from "../interfaces/IUser";

export class UserModel {
    async findUser(email: string): Promise<IUser | null> {
        const userFound = await User.findOne({ email });

        if (userFound) {
            return userFound;
        }

        return null;
    }
}