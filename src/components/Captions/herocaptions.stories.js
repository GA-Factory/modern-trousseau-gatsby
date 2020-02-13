import React from 'react';
import { storiesOf } from '@storybook/react';
import HeroCaption from './herocaptions'

storiesOf('HeroCaption', module)
  .add('Design And Made With Love', () => (
    <HeroCaption title="Design And Made With Love" description="French and Italian laces and silks..." />
  ));
  storiesOf('HeroCaption', module)
  .add('Tailored to You', () => (
    <HeroCaption title="Tailored to You" description="An in-person experience will give you..." />
  ));
  storiesOf('HeroCaption', module)
  .add('Flagship Boutiques', () => (
    <HeroCaption title="Flagship Boutiques" description="Exclusively shop our gowns..." />
  ));