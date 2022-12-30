import { FC, useState } from 'react';
import { products } from '../../data';
import { Product } from '../../models';
import { ModalContext } from './ModalContext';

interface Props {
    children: React.ReactNode;
}

export const ModalProvider: FC<Props> = ({children}) => {
    const [productSelected,setProductSelected] = useState<Product>(products[0]);
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <ModalContext.Provider value={{
            productSelected,
            setProductSelected,
            visible,
            setVisible
        }}>
            {children}
        </ModalContext.Provider>
    )
};