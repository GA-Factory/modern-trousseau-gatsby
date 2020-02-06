import React from 'react';
import { storiesOf } from '@storybook/react';
import Burger from './index';

function handleClick(e) {
    e.preventDefault();
        alert('Open me baby!');
}

storiesOf('Burger', module)
    .add('Menu', () => <Burger name={['fas', 'bars']} onClick={handleClick} />);
