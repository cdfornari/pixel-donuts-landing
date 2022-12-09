import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { Section } from './section.styled';

export const HistorySection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='about-us'>
        <Section>
            <Waypoint
                onEnter={() => setSection('about-us')}
            />
            {
                
            }
        </Section>
    </section>
  )
}