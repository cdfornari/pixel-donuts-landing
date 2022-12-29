import { FC, useContext } from 'react'
import { CountryContext } from '../../../context'
import { Product } from '../../../models'
import { JapaneseProductCard } from './JapaneseProductCard'
import { VenezuelanProductCard } from './VenezuelanProductCard'

interface Props {
    product: Product
}

export const ProductCard: FC<Props> = ({product}) => {
  const {country} = useContext(CountryContext)
  return (
    <>
      {
        country === 'vzla' ? 
        <VenezuelanProductCard
          product={product}
        /> :
        <JapaneseProductCard 
          product={product}
        />
      }
    </>
  )
}