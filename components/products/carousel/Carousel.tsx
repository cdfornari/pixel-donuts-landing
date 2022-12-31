import { Button, Image, Modal, Text, useModal, useTheme } from '@nextui-org/react';
import { FC, useContext, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ProductCard } from '../card';
import { Product } from '../../../models'
import { CountryContext, ShoppingCartContext } from '../../../context';
import { Counter } from '../../common';
import '@splidejs/react-splide/css';
import { Notification } from '../../../notifications';

interface Props{
    title: string
    products: Product[]
}

export const Carousel: FC<Props> = ({title,products}) => {
  const {isDark} = useTheme()
  const { setVisible, bindings } = useModal();
  const {addProductToCart} = useContext(ShoppingCartContext)
  const {country} = useContext(CountryContext)
  const [selectedProduct,setSelectedProduct] = useState<Product>()
  const [quantity,setQuantity] = useState(1)
  return (
    <>
      <Modal
        {...bindings}
        onClose={() => {
          setVisible(false)
          setQuantity(1)
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {
              country === 'vzla' ? `Agregar ${selectedProduct?.titleVE} al carrito` :
              `カートに${selectedProduct?.titleJP}を追加する`
            }
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={selectedProduct?.image || ''}
            objectFit="contain"
          />
          <Counter
            count={quantity}
            maxValue={5}
            onChange={setQuantity}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            onClick={() => setVisible(false)}
            color='error'
          >
            {country === 'vzla' ? 'Cancelar' : 'キャンセル'}
          </Button>
          <Button
            auto
            color='success'
            onClick={() => {
              setVisible(false)
              addProductToCart({
                product: selectedProduct!,
                quantity,
              })
              setQuantity(1)
              Notification(isDark).fire({
                icon: 'success',
                title: country === 'vzla' ? 'Producto agregado' : '商品が追加されました',
              })
            }}
          >
            {country === 'vzla' ? 'Agregar' : '追加する'}
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Text h3 
          css={{
            fontFamily: 'var(--donut)',
            color: '$secondary',
          }}
        >
          {title.toUpperCase()}
        </Text>
        <Splide
          options={{
            perPage: 2,
            width: '60vw',
            breakpoints: {
              800: {
                perPage: 1,
                width: '80vw',
                pagination: false,
              },
            }
          }}
        >
          {
            products.map(product => (
              <SplideSlide 
                key={product.id} 
                style={{display: 'flex', justifyContent: 'center'}}
                onClick={() =>{
                  setSelectedProduct(product)
                  setVisible(true)
                }}
              >
                <ProductCard product={product} />
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </>
  )
}