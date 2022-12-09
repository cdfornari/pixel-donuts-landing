import { useContext } from 'react'
import { CountryContext } from '../../context';
import { JapaneseNavbar } from './jpn/JapaneseNavbar';
import { VenezuelanNavbar } from './vzla/VenezuelanNavbar';

export const Navbar = () => {
  const {country} = useContext(CountryContext)
  return (
    <>
      {
        country === 'jpn' ? (
          <JapaneseNavbar/>
        ) : (
          <VenezuelanNavbar/>
        )
      }
    </>
  )
}