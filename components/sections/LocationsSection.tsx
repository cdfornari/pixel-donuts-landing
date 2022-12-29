import { Grid, Text } from '@nextui-org/react';
import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { Section } from './section.styled';
import { Map } from '../';

export const LocationsSection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='locations'>
      <Section>
        <Waypoint
          onEnter={() => setSection('locations')}
        />
        <Text h2 css={{fontFamily: 'var(--donut)'}}>
          {country === 'vzla' ? 'ENCUENTRA NUESTRAS TIENDAS' : '私たちの店舗を見つける'}
        </Text>
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} md={10}>
            <Map/>
          </Grid>
          <Grid xs={12} md={2} direction='column' justify='center'>
            <Text h3 css={{fontFamily: 'var(--donut)'}} color='$secondary'>
              {country === 'vzla' ? 'CARACAS' : '東京'}
            </Text>
            <Text>
              {country === 'vzla' ? 'Plaza Madariaga' : '東京のダウンタウン'}
            </Text>
            <Text>
              {country === 'vzla' ? 'Altamira Village' : '東京広場'}
            </Text>
            <Text>
              {country === 'vzla' ? 'CC Los Naranjos' : '東京タワー'}
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
    </section>
  )
}