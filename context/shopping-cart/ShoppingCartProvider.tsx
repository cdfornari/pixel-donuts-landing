import { FC, useEffect, useReducer } from 'react';
import { ShoppingCartItem, ShoppingCart } from '../../models';
import { shoppingCartReducer,ShoppingCartContext } from './';

const initialState: ShoppingCart = []

interface Props {
    children: React.ReactNode;
}

export const ShoppingCartProvider: FC<Props> = ({children}) => {
    const [state,dispatch] = useReducer(shoppingCartReducer, initialState);

    useEffect(() => {
        const storageCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [];
        dispatch({type: 'SET_CART', payload: storageCart});
    },[])

    const addProductToCart = (item: ShoppingCartItem) => {
        if(state.find(({product}) => product.id === item.product.id)){
            dispatch({
                type: 'UPDATE_PRODUCT_QUANTITY',
                payload: item
            })
        } else {
            dispatch({
                type: 'ADD_PRODUCT',
                payload: item
            })
        }
    }
    const updateProductQuantity = (product: ShoppingCartItem) => {
        dispatch({
            type: 'UPDATE_PRODUCT_QUANTITY',
            payload: product
        })
        localStorage.setItem('cart', JSON.stringify(state));
    }
    const removeProduct = (product: ShoppingCartItem) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: product
        })
        localStorage.setItem('cart', JSON.stringify(state));
    }

    const clearCart = () => {
        dispatch({
            type: 'DELETE_CART'
        })
        localStorage.removeItem('cart');
    }
    
    return (
        <ShoppingCartContext.Provider  
            value={{
                products: state,
                addProductToCart,
                updateProductQuantity,
                removeProduct,
                clearCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
};