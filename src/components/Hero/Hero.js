import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi! There I am <span>AYUSH</span> , an aspiring and established developers ready to develop and build awesome apps.
        </SectionText>
        <Button onClick={()=>window.location = 'https://www.linkedin.com/in/ayush-s-abb331128/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;