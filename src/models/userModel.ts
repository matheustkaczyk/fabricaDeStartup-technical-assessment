import { User } from "../database/schemas/userSchema";
import { AuthenticateUserDto, CreateUserDto } from "../dto/userDto";

import IUser from "../interfaces/IUser";

export class UserModel {
    async findUser(email: string): Promise<IUser | null> {
        const userFound = await User.findOne({ email }) as IUser | null;

        if (userFound) {
            return userFound;
        }

        return null;
    }

    async createUser({ name, password, email, type }: CreateUserDto): Promise<IUser | Error> {
        const userExists = await this.findUser(email) as IUser | Error;

        if (!userExists) {

            const user = new User({
                name,
                password,
                email,
                type,
            });

            await user.save();

            return user;

        } else {
            throw new Error("User already exists");
        }
    }

    async authenticateUser({ email, password }: AuthenticateUserDto): Promise<IUser | Error> {
        const userFound = await this.findUser(email) as IUser;

        if (userFound) {
            if (userFound.password === password) {

                return {
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,
                    type: userFound.type,
                };

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("User not found");
        }
    }
}