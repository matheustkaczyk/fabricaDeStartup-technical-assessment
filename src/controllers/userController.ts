import { Request, Response } from "express";

import { UserService } from "../services/userService";

import { AuthenticateUserDto } from "../dto/userDto";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
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