import React from "react";
import "../Styles/Arti.css";
import img1 from "../Assets/Evening Arati – 6.30 pm.jpg";
import img2 from "../Assets/Mangala Arati – 5.00 am.jpg";
import img3 from "../Assets/Worship – 7.30 am to 9.00 am.jpg";

const Arti = () => {
  return (
    <div id="arti-section">
      <h1>Daily Worship & Arati</h1>
      <div id="timing">
        <div id="timing-container">
          <div className="text-box1"><h3>Mangala Arati – 5.00 am</h3></div>
          <div className="img">
            <img src={img1} alt="" srcset="" />
          </div>
        </div>
        <div id="timing-container">
          <div className="text-box2"><h3>Worship – 7.30 am to 9.00 am</h3></div>
          <div className="img">
            <img src={img2} alt="" srcset="" />
          </div>
        </div>
        <div id="timing-container">
          <div className="text-box3"><h3>Evening Arati – 6.30 pm</h3></div>
          <div className="img">
            <img src={img3} alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Arti;
