export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    state: string;
    token: string;
    createdAt: Date;
    totalCount: number;
    cart?: CartItem[];
    comments: Comment[]
}

export type CartItem = {
    bookId: number;
    quantity: number;
}

export interface UserState {
    id: number;
    name: string;
    token: string;
    totalCount: number;
    cart?: CartItem[];
}