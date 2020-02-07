import React from 'react';
import { storiesOf } from '@storybook/react';
import Designer from './Designer';
import calliePhoto from './images/calliePhoto.png';

storiesOf('Designer', module)
    .add('Card', () => <Designer src={calliePhoto} alt="designer photo" 
    text="The look on a bride’s face when she finds her dress – that is priceless and incredibly rewarding." name="Callie Tein" title="Designer" 
    />);
