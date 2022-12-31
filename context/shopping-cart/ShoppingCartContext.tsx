import { createContext } from 'react';
import { ShoppingCartItem, ShoppingCart } from '../../models';

interface ContextProps {
    addProductToCart: (product: ShoppingCartItem) => void;
    updateProductQuantity: (product: ShoppingCartItem) => void;
    removeProduct: (product: ShoppingCartItem) => void;
    clearCart: () => void;
    products: ShoppingCart;
}

export const ShoppingCartContext = createContext({} as ContextProps);