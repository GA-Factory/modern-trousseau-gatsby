import React from 'react';
import './Card.css'
import Icons from '../Icons/FAIcon'

const Card = (props) => {
	return(
		<div className='card-container primary-pink'>
			<Icons name={props.icon} size='3x' />
			<div className='card-title'>{props.title}</div>
			<p className='card-paragraph'>{props.paragraph}</p>
		</div>
	)
}

export default Card