import React from "react";
import "../styles/Activity.css";
import threeDot from "../images/icon-ellipsis.svg";
import threeDotHover from "../images/icon-ellipsis-hover.svg";
const Activity = ({ categorie, hours, prevHours }) => {
  const jsonToCss = () => {
    const title = categorie.replace(/\s+/g, "-").toLowerCase();
    console.log(title);
    return title;
  };
  return (
    <div className={`Activity ${jsonToCss()}`}>
      <div className="content">
        <div className="top">
          <h1 className="categorie">{categorie}</h1>
          <div className="three-dot">
            <img
              src={threeDot}
              alt="dotdotdot"
              onMouseEnter={(e) => (e.target.src = threeDotHover)}
              onMouseLeave={(e) => (e.target.src = threeDot)}
            />
          </div>
        </div>
        <div className="inform">
          <div className="hrs">{hours}hrs</div>
          <p className="last-week">Last Week - {prevHours}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
