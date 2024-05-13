import React from 'react'
import '../Styles/CurrentEvents.css'

const CurrentEvents = () => {
  const links = [
    "https://www.youtube.com/embed/u31qwQUeGuM?si=VgwBAJ696yt-xZ-o",
    "https://www.youtube.com/embed/u31qwQUeGuM?si=VgwBAJ696yt-xZ-o"
  ]

  links.forEach(link => console.log(link))
  
  return (
    <div id="currentevents">
        <div className="header">
          <h1>Current Events</h1>
        </div>
        {links.map(link =>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/u31qwQUeGuM?si=VgwBAJ696yt-xZ-o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        )}
    </div>
  )
}

export default CurrentEvents