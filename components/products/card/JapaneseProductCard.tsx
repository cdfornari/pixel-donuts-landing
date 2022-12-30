import { FC, useContext } from 'react'
import { Card, Row, Text } from '@nextui-org/react'
import { Product } from '../../../models'
import { ModalContext } from '../../../context'

interface Props {
    product: Product
}

export const JapaneseProductCard: FC<Props> = ({product}) => {
  const {setVisible, setProductSelected} = useContext(ModalContext)
  return (
    <Card 
      variant='flat' 
      isPressable
      onPress={() => { 
        setVisible(true);
        setProductSelected(product);
      }}
      css={{
        position: "relative",
        w: 'fit-content',
        h: 'fit-content',
        borderRadius: 0,
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
          ${product.price.toFixed(2)}
        </Text>
        {
          product.comparativePrice > product.price && (
            <div style={{
              display: 'flex'
            }}>
              <Text css={{
                textDecorationLine: "line-through",
                fontWeight: "$semibold",
                fontSize: "$sm",
                color: "$accents5",
              }}>
                ${product.comparativePrice.toFixed(2)}
              </Text>
              <Text css={{
                ml: "$4",
                color: "$success",
                fontSize: "$sm",
                fontWeight: "$semibold",
              }}>
                -{((product.comparativePrice-product.price)*100/product.comparativePrice).toFixed(2)}%
              </Text>
            </div>
          )
        }
      </Card.Footer>
    </Card>
  )
}