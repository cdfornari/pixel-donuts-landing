import { FC,useContext } from 'react'
import { Card, Text } from '@nextui-org/react';
import { Product } from '../../../models'
import { ModalContext } from '../../../context';

interface Props {
    product: Product
}

export const VenezuelanProductCard: FC<Props> = ({product}) => {
  const {setVisible, setProductSelected} = useContext(ModalContext);
  return (
    <Card
      isHoverable
      isPressable
      onPress={() => {
        setVisible(true);
        setProductSelected(product);
      }}
      variant='bordered'
      css={{
        position: "relative",
        w: 'fit-content',
        h: 'fit-content',
      }}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Text h4>
          {product.titleVE}
        </Text>
      </Card.Header>
      <Card.Body
        css={{py: 50, px: 20}}
      >
        <Card.Image
          src={product.image}
          objectFit='contain'
          width={250}
          height={250}
          alt="Product Image"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          padding: '5px 20px',
        }}>
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
        </div>
      </Card.Footer>
    </Card>
  )
}