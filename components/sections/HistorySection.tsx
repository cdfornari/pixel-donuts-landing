import { Card, Col, Grid, Text } from '@nextui-org/react';
import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { Section } from './section.styled';

export const HistorySection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='about-us'>
      <Section>
        <Text h2 css={{fontFamily: 'var(--donut)'}}>
          {country === 'vzla' ? 'NUESTRA HISTORIA' : '私たちの歴史'}
        </Text>
        <Waypoint
          onEnter={() => setSection('about-us')}
        />
        <Grid.Container gap={5}>
          <Grid xs={12} md={6} direction='column'>
            <Card>
              <Card.Image
                src="store.jpg"
                objectFit="cover"
                alt="Card image background"
              />
              {
                country === 'vzla' && (
                  <Card.Footer 
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Col>
                      <Text h4 color="black">
                        Nuestra primera tienda en Japón
                      </Text>
                    </Col>
                  </Card.Footer>
                ) 
              }
            </Card>
            {
              country === 'jpn' && (
                <Text>
                  私たちの初めての日本の店舗
                </Text>
              )
            }
          </Grid>
          <Grid xs={12} md={6}>
            <Text size='$xl'>
              {
                country === 'vzla' ? (
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nihil molestias aliquid delectus corporis. Laudantium nihil commodi doloribus quaerat, inventore possimus harum voluptatum nemo et quidem ullam vero dolor sunt.'
                ) : (
                  '私たちの初めての日本の店舗 私たちの初めての日本の店舗 私たちの初めての日本の店舗 私たちの初めての日本の店舗 私たちの初めての日本の店舗 私たちの初めての日本の店舗'
                )
              }
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
    </section>
  )
}