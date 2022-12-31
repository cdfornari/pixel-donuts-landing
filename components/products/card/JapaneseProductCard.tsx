import { FC } from 'react'
import { Card, Row, Text } from '@nextui-org/react'
import { Product } from '../../../models'

interface Props {
    product: Product
}

export const JapaneseProductCard: FC<Props> = ({product}) => {
  return (
    <Card 
      variant='flat' 
      css={{
        position: "relative",
        w: 'fit-content',
        h: 'fit-content',
        borderRadius: 0,
        cursor: 'pointer',
      }}
    >
      <Card.Body css={{ mb: 80 }}>
        <Card.Image
          src={product.image}
          objectFit="contain"
          width={250}
          height={250}
          alt={product.titleJP}
        />
      </Card.Body>
      <Card.Footer 
        css={{ 
          justifyItems: "flex-start", 
          fd: 'column',
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Text b>{product.titleJP}</Text>
        <Text css={{
          fontSize: "$md",
          fontWeight: "$bold",
        }}>
          ¥{product.priceYen.toFixed(2)}
        </Text>
      </Card.Footer>
    </Card>
  )
}