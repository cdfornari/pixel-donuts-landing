import { Grid, Text } from '@nextui-org/react';
import { useContext, useState } from 'react';
import { Waypoint } from 'react-waypoint'
import { SectionContext,CountryContext } from '../../context';
import { categories, products } from '../../data';
import { Carousel } from '../products';
import { ProductModal } from '../products/modal/ProductModal';
import { Section } from './section.styled';

export const MenuSection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='menu'>
      <Section css={{py: '$24'}}>
        <Text h2 css={{fontFamily: 'var(--donut)'}}>
          {country === 'vzla' ? 'NUESTRO MENU' : 'メニュー'}
        </Text>
        <Waypoint
          onEnter={() => setSection('menu')}
        />
        <Grid.Container gap={5}>
          {
            categories.map((category, index) => (
              <Grid xs={12} 
                key={index}
                css={{
                  px:0
                }}
                justify='center'
              >
                <Carousel
                  title={country === 'vzla' ? category.ve : category.jpn}
                  products={products.filter(product => product.category === category.cat)}
                />
              </Grid>
            ))
          }
        </Grid.Container>
      </Section>
      <ProductModal/>
    </section>
  )
}