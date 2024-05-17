import React from "react";
import "../Styles/Arti.css";
import img1 from "../Assets/Evening Arati – 6.30 pm.jpg";
import img2 from "../Assets/Mangala Arati – 5.00 am.jpg";
import img3 from "../Assets/Worship – 7.30 am to 9.00 am.jpg";

const Arti = () => {
  return (
    <div id="arti">
      <div className="heading-container">
        <h1>Daily Worship & Arti</h1>
      </div>
      <div className="timing">
        <div className="timing-container">
          <h1 id="orange">Mangala Arati – 5.00 am</h1>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>

        {/* ATHI H1 TAKU ID DEICHI .... BACKGROUND COLOR CHANGE KARIBA PAIN ... JADI TUME AAU KICHI STYLE RE CHANGE KARI PARIBO THEN KARIDEBO ... .... */}

        <div className="timing-container">
          <h1 id="green">Worship – 7.30 am to 9.00 am</h1>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="timing-container">
          <h1 id="pink">Evening Arati – 6.30 pm</h1>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arti;
