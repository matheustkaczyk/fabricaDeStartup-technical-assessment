enum UserType {
    'admin', 'user'
}

export default interface IUser {
    name: string;
    email: string;
    password: string;
    type: UserType;
}