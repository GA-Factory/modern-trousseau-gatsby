import React from 'react';
import { storiesOf } from '@storybook/react';
import Designer from './Designer';

storiesOf('Designer', module)
    .add('Card', () => (
<Designer
  src="https://via.placeholder.com/150"
  alt="Placeholder"
  text="Please insert a picture in the source and insert texts about the designer"
  name="Placeholder"
  title="Placeholder"
/>
));
