export type Product = {
    id: number;
} & CreateProduct;

export type CreateProduct = {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export type ProductsState = {
    products: Product[];
    currentProduct: Product | null;
    isLoading: boolean;
    error: string | null;
}