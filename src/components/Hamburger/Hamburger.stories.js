import React from 'react';
import { storiesOf } from '@storybook/react';

import Burger from './Hamburger';

storiesOf('BurgerMenu', module)
  .add('BurgerMenu', () => <Burger 
      menu1="placeholder1"
      menu2="placeholder2"
      menu3="placeholder3"
      />);
