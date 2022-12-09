import { Card, Text } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
    country: string
    flag: string
    onClick: () => void
}

export const CountryCard: FC<Props> = ({flag,country,onClick}) => {
  return (
    <Card 
        isPressable 
        onPress={onClick}
        css={{ w: 'fit-content' }}
    >
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={flag}
            objectFit="cover"
            width={250}
            alt={country}
        />
        </Card.Body>
        <Card.Footer>
            <Text h2>{country}</Text>
        </Card.Footer>
    </Card>
  )
}