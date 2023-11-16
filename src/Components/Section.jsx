import React from "react";
import DownArrow from "../assets/images/down-arrow.svg";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  image,
  LeftButton,
  RightButton,
  isVideo,
  video,
}) => {
  return (
    <div className="Wrap" style={{ backgroundImage: `url(${image})` }}>
      {isVideo && (
        <video autoPlay loop muted playsInline className="BackVideo">
          <source src={video} type="video/mp4"></source>
        </video>
      )}
      <Fade bottom>
        {isVideo ? (
          <div className="ItemText TextColor">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ) : (
          <div className="ItemText OtherColor">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        )}
      </Fade>

      <div className="Button">
        <Fade bottom>
          <div className="ButtonGroup">
            <button className="LeftButton">{LeftButton}</button>
            {RightButton && (
              <button className="RightButton">{RightButton}</button>
            )}
          </div>
        </Fade>
        <img src={DownArrow} className="DownArrow"></img>
      </div>
    </div>
  );
};

export default Section;
