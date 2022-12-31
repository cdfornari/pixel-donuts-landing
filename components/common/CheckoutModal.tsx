import { FC, useContext, useEffect, useMemo } from 'react';
import { Button, Modal, Text, Grid, Input, Radio, Spacer, Divider } from '@nextui-org/react'
import { CountryContext, ShoppingCartContext } from '../../context';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const CheckoutModal: FC<Props> = ({visible, setVisible}) => {
  const {country} = useContext(CountryContext)
  const {products,removeProduct} = useContext(ShoppingCartContext)
  useEffect(() => {
    if (products.length === 0)
      setVisible(false)
  }, [products])
  const total = useMemo(() => 
    products.reduce(
      (acc, item) => acc + (country === 'vzla' ? item.product.price : item.product.priceYen) * item.quantity, 0
    ), [products,country]
  )
  return (
    <Modal
      open={visible}
      fullScreen={products.length > 0}
      blur={products.length > 0}
      closeButton={products.length > 0}
      onClose={() => setVisible(false)}
    >
      {
        products.length === 0 ? (
          <>
            <Modal.Header>
              <Text>
                {country === 'vzla' ? `No hay productos en el carrito` : `カートに商品がありません`}
              </Text>
            </Modal.Header>
            <Modal.Footer>
              <Button
                color='error'
                onClick={() => setVisible(false)}
              >
                {country === 'vzla' ? `Cerrar` : `閉じる`}
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header>
              <Text b size={22} transform='uppercase'>
                {country === 'vzla' ? `CheckOut - Delivery Pixel Donuts` : `チェックアウト - 配達 Pixel Donuts`}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Grid.Container>
                <Grid xs={12} sm={6} direction="column">
                  <Spacer y={1} />
                  <Input
                    labelPlaceholder= {country === 'vzla' ? `Dirección` : `方向`}
                    clearable
                    bordered
                    fullWidth
                    size='lg'
                    type='text'
                  />
                  <Spacer y={2.5} />
                  <Input
                    labelPlaceholder= {country === 'vzla' ? `Estado` : `領域`}
                    clearable
                    bordered
                    fullWidth
                    size='lg'
                    type='text'
                  />
                  <Spacer y={2.5} />
                  <Input
                    labelPlaceholder={country === 'vzla' ? 'Ciudad' : '県'}
                    clearable
                    bordered
                    fullWidth
                    size='lg'
                    type='text'
                  />
                  <Spacer y={2.5} />
                  <Input
                    labelPlaceholder= {country === 'vzla' ? 'Nro. Telefono' : '電話番号'}
                    clearable
                    bordered
                    fullWidth
                    size='lg'
                    type='text'
                  />
                  <Spacer y={1} />
                  <Radio.Group
                    label= {country === 'vzla' ? 'Metodo de Pago' : '支払方法'}
                  >
                    <Radio value = {country === 'vzla' ? 'Tarjeta Credito' : 'クレジットカード'}>
                      {country === 'vzla' ? 'Tarjeta Credito' : 'クレジットカード'}
                    </Radio>
                    <Radio value = "debito">
                      {country === 'vzla' ? 'Tarjeta Debito' : '借方'}
                    </Radio>
                    <Radio value = "bancoMovil">
                      {country === 'vzla' ? 'Pago Movil' : 'モバイルバンキング'}
                    </Radio>
                    <Radio value = "Instapago">
                      {country === 'vzla' ? 'InstaPago' : 'Insta 私が払う'}
                    </Radio>  
                    <Radio value = "ubipago">
                      {country === 'vzla' ? 'UbiiPago' : 'Ubi 私が払う'}
                    </Radio> 
                  </Radio.Group>
                </Grid>
                <Grid xs={12} sm={6} direction="column" css={{d: 'flex', gap: '$8', pl: '$12'}}>
                  {
                    products.map((item, index) => (
                      <div style={{display: 'flex',gap: '$8', alignItems:'center', height: 'fit-content', width: '50%',justifyContent: 'space-between'}}>
                        <img
                          src={item.product.image}
                          alt={item.product.titleVE}
                          style={{objectFit: 'contain'}}
                          width={125}
                          height={125}
                        />
                        <div style={{height: 'fit-content', display:'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                          <Text>
                            {
                              country === 'vzla' ? item.product.titleVE : item.product.titleJP
                            }
                          </Text>
                          <Text>
                            {country === 'vzla' ? `Cantidad:   ` : `数量   `}
                            {item.quantity}
                          </Text>
                          <Text>
                            {country === 'vzla' ? `Precio:   $` : `価格   ¥`}
                            {country === 'vzla' ? item.product.price : item.product.priceYen}
                          </Text>
                        </div>
                        <Button
                          auto
                          flat 
                          color='error'
                          onPress={() => removeProduct(item)}
                        >
                          <FaTrash/>
                        </Button>
                      </div>
                    ))
                  }
                </Grid>
              </Grid.Container>
            </Modal.Body>
            <Divider />
            <Modal.Footer>
              <Grid.Container direction='row'>
                  <Grid xs= {6} justify='center'>
                    <Text h3>
                      {country === 'vzla' ? `Precio Total:   $` : `合計金額   ¥`} 
                      {total}
                    </Text>
                  </Grid>
                  <Grid xs= {6} justify='center'>
                    <Button 
                      bordered
                      color='success' 
                      size='lg'
                    >
                      {country === 'vzla' ? `Comprar` : `注文を作成`} 
                    </Button>
                  </Grid>
              </Grid.Container>
            </Modal.Footer>
          </>
        )
      }
    </Modal>
  )
}