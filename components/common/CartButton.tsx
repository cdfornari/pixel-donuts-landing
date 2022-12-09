import { Badge } from '@nextui-org/react';
import { FaShoppingCart } from 'react-icons/fa'

export const CartButton = () => {
  return (
    <Badge color="error" content={1}>
        <FaShoppingCart
            size={28}
        />
    </Badge>
  )
}