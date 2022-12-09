import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { Section } from './section.styled';

export const MenuSection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='menu'>
        <Section>
            <Waypoint
                onEnter={() => setSection('menu')}
            />
            {
                
            }
        </Section>
    </section>
  )
}