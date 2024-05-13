import React from 'react'
import '../Styles/Quote.css'
import quote1 from '../Assets/left-quote.jpg'
import quote2 from '../Assets/right-quote.jpg'

const Quote = () => {
  return (
    <div id="Quote-section">
        <h1>Quotes</h1>
        <div id="quote-div">
            <div className="left-quote-img">
                <img src={quote1} alt="" />
            </div>
            <div className="right-quote-img">
                <img src={quote2} alt="" />
            </div>
        </div>
        <button><i class="fa-regular fa-lightbulb"></i><p>More Quote</p></button>
    </div>
  )
}

export default Quote