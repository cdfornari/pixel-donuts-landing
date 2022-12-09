import { Navbar } from '@nextui-org/react'
import { CartButton, Logo, ThemeSwitcher } from '../../common'
import { VenezuelanNavItem } from './VenezuelanNavItem'

export const VenezuelanNavbar = () => {
  return (
    <Navbar
      variant='floating'
      isBordered
      height={90}
    >
      <Navbar.Brand>
        <Logo/>
      </Navbar.Brand>
      <Navbar.Content
        variant='underline-rounded'
        enableCursorHighlight
        activeColor='primary'
      >
        <VenezuelanNavItem
          title='menu'
          href='menu'
        />
        <VenezuelanNavItem
          title='historia'
          href='about-us'
        />
        <VenezuelanNavItem
          title='ubicaciones'
          href='locations'
        />
      </Navbar.Content>  
      <Navbar.Content>
        <ThemeSwitcher/>
        <CartButton/>
      </Navbar.Content>  
    </Navbar>
  )
}