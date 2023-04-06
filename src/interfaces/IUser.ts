enum UserType {
    'admin', 'user'
}

export default interface IUser {
    id?: string;
    name: string;
    email: string;
    password?: string;
    type: UserType;
}