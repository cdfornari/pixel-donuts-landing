import { Product } from './';

export type ShoppingCart = ShoppingCartItem[]
export interface ShoppingCartItem {
    product: Product;
    quantity: number;
}