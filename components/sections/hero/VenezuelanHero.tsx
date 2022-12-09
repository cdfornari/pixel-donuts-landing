import { Grid, Text } from '@nextui-org/react'
import Image from 'next/image'

export const VenezuelanHero = () => {
  return (
    <Grid.Container gap={6}>
        <Grid 
            xs={12} md={6}
            css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Text h1>
                Las mejores donas del mundo mundial
            </Text>
            <Text h3 css={{ textGradient: '90deg, rgba(198,54,99,1) 0%, rgba(239,106,0,1) 100%' }}>
                También vendemos desayunos, café y más
            </Text>
        </Grid>
        <Grid xs={12} md={6}>
            <Image
                src='/donut.png'
                alt='donut'
                width={500}
                height={500}
            />
        </Grid>
    </Grid.Container>
  )
}