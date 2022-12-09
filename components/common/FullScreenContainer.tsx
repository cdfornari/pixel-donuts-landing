import { FC } from 'react'
import { Container } from '@nextui-org/react'

interface Props {
  children: React.ReactNode
}

export const FullScreenContainer: FC<Props> = ({children}) => {
  return (
    <Container
      css={{w: '100vw', h: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      {children}
    </Container>
  )
}