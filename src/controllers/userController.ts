import { Request, Response } from "express";

import { UserService } from "../services/userService";

import { AuthenticateUserDto, CreateUserDto } from "../dto/userDto";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, type }: CreateUserDto = req.body;
            
            await this.userService.createUser({ name, email, password, type });
    
            res.status(201);
        } catch (error: Error | any) {
            res.status(400).json({ message: error.message });        
        }
    }

    public async authenticateUser(req: Request, res: Response) {
        try {
            const { email, password }: AuthenticateUserDto = req.body;
            
            const token = await this.userService.authenticateUser({ email, password });
    
            res.status(200).json({ token });
        } catch (error: Error | any) {
            res.status(400).json(error);        
        }
    }
}