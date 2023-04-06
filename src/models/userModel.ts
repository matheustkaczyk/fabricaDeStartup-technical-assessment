import { User } from "../database/schemas/userSchema";
import { CreateUserDto } from "../dto/userDto";

import IUser from "../interfaces/IUser";

export class UserModel {
    async findUser(email: string): Promise<IUser | Error> {
        const userFound = await User.findOne({ email });

        if (userFound) {
            return userFound;
        } else {
            throw new Error("User not found");
        }
    }

    async createUser({ name, password, email }: CreateUserDto): Promise<IUser> {
        const userExists = await this.findUser(email);

        if (!userExists) {

            const user = new User({
                name,
                password,
                email,
            });

            await user.save();

            return user;

        } else {
            throw new Error("User already exists");
        }
    }
}