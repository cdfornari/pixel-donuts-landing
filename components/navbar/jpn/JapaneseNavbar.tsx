import { Navbar } from '@nextui-org/react'
import { CartButton, Logo, ThemeSwitcher } from '../../common'
import { JapaneseNavItem } from './JapaneseNavItem'

export const JapaneseNavbar = () => {
  return (
    <Navbar
      isCompact
      variant='sticky'
      isBordered
      maxWidth='fluid'
    >
      <Navbar.Brand>
        <Logo/>
      </Navbar.Brand>  
      <Navbar.Content
        variant='underline'
        activeColor='primary'
      >
        <JapaneseNavItem
          title='メニュー'
          href='menu'
        />
        <JapaneseNavItem
          title='歴史'
          href='about-us'
        />
        <JapaneseNavItem
          title='場所'
          href='locations'
        />
      </Navbar.Content>  
      <Navbar.Content css={{mr: '$10'}}>
        <ThemeSwitcher/>
        <CartButton/>
      </Navbar.Content>
    </Navbar>
  )
}