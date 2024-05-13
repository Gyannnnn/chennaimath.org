import React from 'react'
import '../Styles/Inspiration.css'
import placeholder from '../Assets/placeholder.jpg'

export default function Inspiration() {
	const list = Array(3).fill(placeholder)
	
	return <div id="inspiration">
		<div className="header">
			<h1>Our Inspiration</h1>
		</div>
		<div className="contents">
			{list.map((item) => 
				<img width="450" height="300" src={item} />
			)}
		</div>
	</div>
}
