import { FC, useContext } from 'react';
import { Navbar } from '@nextui-org/react'
import { SectionContext } from '../../../context';

interface Props {
    href: string;
    title: string
}

export const JapaneseNavItem: FC<Props> = ({href,title}) => {
  const {section} = useContext(SectionContext)
  return (
    <Navbar.Link
        isActive={section === href}
        activeColor='primary'
        href={`#${href}`}
    >
        {title.toUpperCase()}
    </Navbar.Link>
  )
}