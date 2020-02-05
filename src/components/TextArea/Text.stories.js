import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './Text';

storiesOf('Text', module)
    .add('Default', () => <Text pClassList='text-area-title' textAreaClassList='text-area'/>)
