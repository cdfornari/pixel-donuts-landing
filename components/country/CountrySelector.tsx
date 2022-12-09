import { useContext } from 'react';
import { Card, Grid, Text } from '@nextui-org/react'
import { CountryCard } from './CountryCard'
import { CountryContext } from '../../context';

export const CountrySelector = () => {
  const {setCountry} = useContext(CountryContext)
  return (
    <Card
      css={{ w: 'fit-content', p: 16 }}
      variant='bordered'
    >
      <Card.Header>
        <Text h1>Seleccione un país</Text>
      </Card.Header>
      <Card.Body>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6} justify='center' alignItems='center'>
            <CountryCard
              country="Venezuela"
              flag="./vzla-flag.svg.png"
              onClick={() => setCountry('vzla')}
            />
          </Grid>
          <Grid xs={12} md={6} justify='center' alignItems='center'>
            <CountryCard
              country="Japón"
              flag="./jpn-flag.svg.png"
              onClick={() => setCountry('jpn')}
            />
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}