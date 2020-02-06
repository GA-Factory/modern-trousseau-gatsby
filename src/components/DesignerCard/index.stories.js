import React from 'react';
import { storiesOf } from '@storybook/react';
import Designer from './index';
import calliePhoto from './images/calliePhoto.png';

storiesOf('Designer', module)
    .add('Card', () => <Designer src={calliePhoto} alt="designer photo" height="125px" width="133px" 
        text="This works" 
        name="Some Name" title="Some Title" />);
