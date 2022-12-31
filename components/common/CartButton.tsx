import { Avatar, Badge, Dropdown, Text, Button } from '@nextui-org/react';
import { FaShoppingCart } from 'react-icons/fa'
import { useContext, useState } from 'react';
import { CountryContext } from '../../context/country/CountryContext';
import { CartListModal } from '../products/modal/CartListModal';
import { CartModal } from '../products/modal/CartModal';


export const CartButton = () => {
  const {country} = useContext(CountryContext);
  const [visible, setVisible] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false)

  return (
    <>
    
    <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <Avatar
              squared
              size="lg"
              as="button"
              icon = {
                <Badge color="error" content={1}>
                  <FaShoppingCart
                    size={28}
                  />
                </Badge>
              }
            />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Avatar Actions">
            <Dropdown.Item key="listCart" css={{ height: "$18" }}>
              <Button
                light  
                auto
                onClick={ () => setVisible(true) }
              >
                {country === 'vzla' ? 'Lista de Productos' : '製品一覧'}
              </Button>
            </Dropdown.Item>
            <Dropdown.Item key="Cart" withDivider css={{ height: "$18" }}>
              <Button
                light  
                auto
                onClick={ () => setVisibleCart(true) }
              >
                {country === 'vzla' ? 'Procesar compra' : 'プロセス購入'}
              </Button>  
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      <CartListModal visible={visible} setVisible = {setVisible} />

      <CartModal visible = {visibleCart} setVisible = {setVisibleCart} />
    </>
  )
}