export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    state: string;
    token: string;
    createdAt: Date;
    cart?: number[];
    comments: Comment[]
}