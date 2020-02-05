import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageCaptions from './imagecaptions'

storiesOf('ImageCaption', module)
  .add('Design And Made With Love', () => (
    <ImageCaptions title="Design And Made With Love" description="French and Italian laces and silks... " />
  ));
  storiesOf('ImageCaption', module)
  .add('Tailored to You', () => (
    <ImageCaptions title="Tailored to You" description="An in-person experience will give you..." />
  ));
  storiesOf('ImageCaption', module)
  .add('Flagship Boutiques', () => (
    <ImageCaptions title="Flagship Boutiques" description="Exclusively shop our gowns... " />
  ));