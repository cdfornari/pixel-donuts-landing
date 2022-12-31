import { useContext, useMemo, useState } from 'react';
import { Badge } from '@nextui-org/react';
import { FaShoppingCart } from 'react-icons/fa'
import { ShoppingCartContext } from '../../context';
import { CheckoutModal } from './CheckoutModal';

export const CartButton = () => {
  const {products} = useContext(ShoppingCartContext)
  const [visible, setVisible] = useState(false);
  const quantity = useMemo(
    () => products.reduce((acc, product) => acc + product.quantity, 0),
    [products]
  )   
  return (
    <>
      <div style={{cursor: 'pointer'}} onClick={()=>setVisible(true)}>
        <Badge color="error" content={quantity > 9 ? '+9': quantity}>
          <FaShoppingCart
            size={26}
          />
        </Badge>
      </div>
      <CheckoutModal
        visible={visible}
        setVisible={setVisible}
      />
    </>
  )
}