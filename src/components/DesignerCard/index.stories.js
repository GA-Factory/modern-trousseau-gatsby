import React from 'react';
import { storiesOf } from '@storybook/react';
import Designer from './index';
import calliePhoto from './images/calliePhoto.png';

storiesOf('Designer', module)
    .add('Card', () => <Designer src={calliePhoto} alt="designer photo" height="125px" width="133px" top="1142px" left="38px" 
        text="The look on a bride’s face when she finds her dress – that is priceless and incredibly rewarding." 
        name="Callie Tein" title="Designer" />);
