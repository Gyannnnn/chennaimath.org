import React from 'react'
import '../Styles/RecentUpdates.css'
import placeholder from '../Assets/placeholder.jpg'

export default function RecentUpdates() {
	const list = Array(5).fill(placeholder)
	
	return <div id="updates">
		<div className="header">
			<h1>Recent Updates</h1>
		</div>
		<div className="contents">
			{list.map((item) =><div class="box"> 
				<img width="200" height="300" src={item} />
				<p>Title</p>
			</div>		
	)}
		</div>
	</div>
}
