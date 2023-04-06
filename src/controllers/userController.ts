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
            
            const user = await this.userService.createUser({ name, email, password, type });
    
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error);        
        }
    }

    public async authenticateUser(req: Request, res: Response) {
        try {
            const { email, password }: AuthenticateUserDto = req.body;
            
            const token = await this.userService.authenticateUser({ email, password });
    
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json(error);        
        }
    }
}