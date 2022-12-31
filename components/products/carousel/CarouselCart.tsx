import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FC, useContext, useState, useEffect } from 'react';
import { Product } from '../../../models'
import '@splidejs/react-splide/css';
import { Text, Row, Image, Col, Grid, Card } from '@nextui-org/react';
import { CountryContext } from '../../../context/country/CountryContext';
import { ItemCounter } from '../../ui/ItemCounter';

interface Props{
    products: Product[]
}

export const CarouselCartList: FC<Props> = ({products}) => {
  const {country } = useContext(CountryContext)
  const [units, setUnits] = useState(1);
  useEffect(() => {
    setUnits(1);
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Splide
        
        options={{
          width : 550,
          gap   : '1rem',
        }}
      >
        {
          products.map(product => (
            <SplideSlide key={product.id} style={{display: 'flex', justifyContent: 'center'}}>
              <Grid justify='center' alignContent='center' alignItems='center'>
                <Row>
                <Text h3 
                  css={{
                    fontFamily: 'var(--donut)',
                    color: '$secondary',
                  }}
                >
                  {country === 'vzla' ? product.titleVE.toUpperCase() : product.titleJP.toUpperCase()}
                </Text>
                </Row>
                <Row justify="space-between">
                  <Image 
                    src= {product.image}
                    alt = "Product image"
                    //objectFit='fill'
                    width={'100%'}
                    height= {'100%'}
                    css= {{ m: '$2'}}
                  />
                </Row>
                <Row justify='flex-start'>
                  <Text h3>
                    {country === 'vzla' ? `Total: $${product.price}` : `¥${product.price}`}
                  </Text>
                </Row>
                <Row justify='center'>
                  <Col>
                    <Text h3>{country === 'vzla' ? 'Cantidad:' : '単位'}</Text>
                  </Col>
                  <ItemCounter count={units} maxValue={99} onChange={setUnits}/>
                </Row>
              </Grid>
            </SplideSlide>
          ))
        }
      </Splide>
    </div>
  )
}