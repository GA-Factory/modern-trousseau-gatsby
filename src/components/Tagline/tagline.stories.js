import React from 'react';
import { storiesOf } from '@storybook/react';

import Tagline from './tagline';

storiesOf('Tagline', module)
	.add('Tagline', () => (<Tagline headline="Classic Couture. Custom Fit." slogan="Where customization meets timeline meets budget." />))