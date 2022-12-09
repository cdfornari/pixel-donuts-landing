import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { Section } from './section.styled';

export const LocationsSection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='locations'>
        <Section>
            <Waypoint
                onEnter={() => setSection('locations')}
            />
            {
                
            }
        </Section>
    </section>
  )
}