import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { ShoppingCartItem, ShoppingCart } from '../../models';
import { shoppingCartReducer,ShoppingCartContext } from './';

const initialState: ShoppingCart = []

interface Props {
    children: React.ReactNode;
}

export const ShoppingCartProvider: FC<Props> = ({children}) => {
    const [state,dispatch] = useReducer(shoppingCartReducer, initialState);

    useEffect(() => {
        const cookiesCart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : []
        dispatch({type: 'SET_CART', payload: cookiesCart});
    },[])

    const addProductToCart = (item: ShoppingCartItem) => {
        const product = state.find(({product}) => product.id === item.product.id);
        if(product){
            dispatch({
                type: 'UPDATE_PRODUCT_QUANTITY',
                payload: {
                    product: item.product,
                    quantity: item.quantity + product.quantity
                }
            })
            Cookies.set('cart', JSON.stringify(
                state.map((cartItem) => {
                    if(cartItem.product.id === item.product.id){
                        return {
                            product: item.product,
                            quantity: item.quantity + product.quantity
                        }
                    }
                    return cartItem;
                })
            ), {expires: 31});
        } else {
            dispatch({
                type: 'ADD_PRODUCT',
                payload: item
            })
            Cookies.set('cart', JSON.stringify([...state,item]), {expires: 31});
        }
    }
    const updateProductQuantity = (product: ShoppingCartItem) => {
        dispatch({
            type: 'UPDATE_PRODUCT_QUANTITY',
            payload: product
        })
        Cookies.set('cart', JSON.stringify(
            state.map((cartItem) => {
                if(cartItem.product.id === product.product.id){
                    return product;
                }
                return cartItem;
            }
        )), {expires: 31});
    }
    const removeProduct = (product: ShoppingCartItem) => {
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: product
        })
        Cookies.set('cart', JSON.stringify(
            state.filter((cartItem) => cartItem.product.id !== product.product.id)
        ), {expires: 31});
    }
    const clearCart = () => {
        dispatch({
            type: 'DELETE_CART'
        })
        Cookies.remove('cart');
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