import { Button, Col, Row, Text } from '@nextui-org/react'
import { SocialIcon } from 'react-social-icons'
import { useContext } from 'react';
import { CountryContext } from '../../context';
import { Logo } from './Logo';

export const Footer = () => {
  const {country,setCountry} = useContext(CountryContext)
  return (
    <Col 
      css={{
        px: '$10',
        pt: '$10',
        pb: '$2',
        backgroundColor: '$primary',
      }}
    >
      <Row justify='center' css={{mb: 20, gap: 30}}>
        <div style={{display: 'flex', gap: 10}}>
          <Button
            flat
            color='error'
            onPress={() => setCountry(country === 'vzla' ? 'jpn' : 'vzla')}
          >
            {country === 'vzla' ? 'Cambiar a Japón' : 'ベネズエラに切り替える'}
          </Button>
        </div>
      </Row>
      <Row 
        justify='space-around' 
        align='center' 
        css={{
          mb: 20, 
          ml: 65,
          '@xsMax': {
            ml: 0,
            flexDirection: 'column',
          }
        }}
      >
        <Logo/>
        <Text>
          Benguigui brothers & Kokiri Capital
        </Text>
        <div style={{display: 'flex', gap: 10}}>
          <Text css={{mr: '$8'}}>
            {country === 'vzla' ? 'Síguenos en redes sociales:' : 'でフォローしてください'}
          </Text>
          <SocialIcon 
            network='facebook'
            bgColor='#fdf8ea'
          />
          <SocialIcon 
            network='instagram'
            bgColor='#fdf8ea'
          />
        </div>
      </Row>
      <Row justify='center'>
        <Text>
          ©2022 Developed by Dream Team
        </Text>
      </Row>
    </Col>
  )
}