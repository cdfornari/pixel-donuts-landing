import { ShoppingCartItem, ShoppingCart } from '../../models';

type cartAction =
|{ type: 'SET_CART', payload: ShoppingCart }
|{ type: 'DELETE_CART'}
|{ type: 'ADD_PRODUCT', payload: ShoppingCartItem }
|{ type: 'UPDATE_PRODUCT_QUANTITY', payload: ShoppingCartItem }
|{ type: 'REMOVE_PRODUCT', payload: ShoppingCartItem }

export const shoppingCartReducer = (state: ShoppingCart, action: cartAction) => {
    switch (action.type) {
        case 'SET_CART':
            return action.payload
        case `ADD_PRODUCT`:
            return [...state, action.payload]
        case `UPDATE_PRODUCT_QUANTITY`:
            return state.map(item => 
                    item.product.id === action.payload.product.id 
                    ? action.payload : item
                )
        case `REMOVE_PRODUCT`:
            return state.filter(({product}) =>
                    product.id !== action.payload.product.id
                )
        case 'DELETE_CART':
            return []
        default:
            return state;
    }
};