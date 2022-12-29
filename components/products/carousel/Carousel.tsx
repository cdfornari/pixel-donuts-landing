import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC } from 'react'
import { Product } from '../../../models'
import { ProductCard } from '../card'
import '@splidejs/react-splide/css';
import { Text } from '@nextui-org/react';

interface Props{
    title: string
    products: Product[]
}

export const Carousel: FC<Props> = ({title,products}) => {
  return (
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
            <SplideSlide key={product.id} style={{display: 'flex', justifyContent: 'center'}}>
              <ProductCard product={product} />
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
  )
}