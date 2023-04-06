export interface CreateUserDto {
    email: string;
    password: string;
    name: string;
}

export interface AuthenticateUserDto {
    email: string;
    password: string;
}