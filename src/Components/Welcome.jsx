import React from "react";
import "../Styles/Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="w1">
        <h1>Sri Ramakrishna Math Chennai</h1>
        <div>
          <h1>The first branch center of Ramakrishna Order in South India</h1>
        </div>
      </div>
      <div className="w2">
        <div>
          <h1>Daily Inspiration</h1>
        </div>
        <div id="quote">
          <div>
            <h1>
              <span>“</span>There is no hope for a worldly man if he is not
              sincerely devoted to God. <span id="span"> „</span>
            </h1>
          </div>
          <div className="lower-quote">
            <div></div>
            <div>
              <h3>- Sri Ramakrishna</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
