import { FC, useContext } from 'react';
import { Navbar } from '@nextui-org/react'
import { SectionContext } from '../../../context';

interface Props {
    href: string;
    title: string
}

export const VenezuelanNavItem: FC<Props> = ({href,title}) => {
  const {section} = useContext(SectionContext)
  return (
    <Navbar.Link
        isActive={section === href}
        activeColor='primary'
        href={`#${href}`}
        css={{
            fontFamily: 'var(--donut)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                color: '$primary',
            }
        }}
    >
        {title.toUpperCase()}
    </Navbar.Link>
  )
}