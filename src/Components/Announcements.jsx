import React from "react";
import "../Styles/Announcements.css";
import placeholder from "../Assets/placeholder.jpg";

export default function Announcements() {
  const list = Array(6).fill(placeholder);

  return (
    <div id="announcements">
      <div className="header">
        <h1>Featured Announcements</h1>
      </div>
      <div className="contents">
        {list.map((item) => (
          <img src={item} />
        ))}
      </div>
    </div>
  );
}
