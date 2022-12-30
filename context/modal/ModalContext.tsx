import { createContext } from 'react';
import { Product } from '../../models';

//export type Section = '' | 'menu' | 'about-us' | 'locations';

interface ContextProps {
    productSelected: Product;
    visible: boolean;
    setProductSelected: (product: Product) => void;
    setVisible: (visible: boolean) => void;
}

export const ModalContext = createContext({} as ContextProps);