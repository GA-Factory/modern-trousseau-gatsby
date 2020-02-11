import React from 'react';
import { storiesOf } from '@storybook/react';
import Icons from '../Icons/FAIcon'

import Card from './Card';

storiesOf('Cards', module)
	.add('HeartCard', () => (<Card icon={['far', 'heart']} type='heart' title='Get Inspired' paragraph='Each design evokes classic couture while expressing a vision of modern style & sophistication.' />))
	.add('CalCard', () => (<Card icon={['fas', 'calendar-day']} type='calendar' title='Book With Us' paragraph='Spend an hour with us to create a truly unique, personalized & flattering wedding dress.' />))
	.add('DressCard', () => (<Card icon={['far', 'hand-pointer']} type='dress' title='Create Your Dream Dress' paragraph='Anything and everything is customizable to make you feel confident & beautiful.' />))