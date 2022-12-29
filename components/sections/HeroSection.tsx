import { useContext } from 'react';
import { Waypoint } from 'react-waypoint'
import { CountryContext, SectionContext } from '../../context';
import { JapaneseHero } from './hero/JapaneseHero';
import { VenezuelanHero } from './hero/VenezuelanHero';
import { Section } from './section.styled';

export const HeroSection = () => {
  const {setSection} = useContext(SectionContext)
  const {country} = useContext(CountryContext)
  return (
    <section id='home'>
      <Section>
        <Waypoint
          onEnter={() => setSection('')}
        />
        {
          country === 'vzla' ? 
          <VenezuelanHero /> :
          <JapaneseHero />
        }
      </Section>
    </section>
  )
}